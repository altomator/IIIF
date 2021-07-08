#!/usr/bin/perl -w
#######################
# USAGE: perl CSV_to_IIIF.pl IN
#   IN : input .csv file
######################
# create a IIIF collection of Gallica periodical titles
# The periodical ARKs must be given as CSV data
######################

# use strict;
use warnings;
use 5.010;
use Data::Dumper;
use Text::CSV;
use Path::Class;
use File::Slurp;
use File::Copy;
use Date::Simple qw(date);

#binmode(STDOUT, ":utf8");
use open ':std', ':encoding(utf-8)';

$msg = "\nUsage : perl toolbox.pl csv_data
csv_data: CSV input file
";

# OUT folder
my $OUT = "OUT_coll";

# base URL for the IIIF collection files
#my $baseURL = "https://raw.githubusercontent.com/altomator/IIIF/main/collection/selection/";
my $baseURL = "https://gallicapix.bnf.fr/static/collection/";
#my $baseURL = "http://localhost:8984/static/collection/";

# Gallica
my $gallicaURL = "https://gallica.bnf.fr/ark:/12148/";
my $iiifGallicaURL = "https://gallica.bnf.fr/iiif/ark:/12148/";
# Gallica Issues API
my $urlAPIissue = "https://gallica.bnf.fr/services/Issues?ark=";

$arkPattern = "ark\=\"(.+)\" ";
$doyPattern = "dayOfYear\=\"(.+)\"";
$yearPattern= "year\>(.+)\<";
$datePattern= "\"\>(.+)\<";

my @externalData; # data structure for import
# JSON file template for a IIIF collection
my $topTemplate = "template_coll_top_gallicapix.json";
my $subTemplate = "template_coll_title_gallicapix.json";

my $totalYears =0;


sub continuer {
 say " ********************************************";
 print " OK to continue? (Y/N)\n >";
 my $rep = <STDIN>;
 chomp $rep;
 if (($rep eq "N") or ($rep eq "n")) {die}
}

# write the IIIF sub-collections for a periodical title
sub writeSubcollections {
	my $ark=shift;
	my $title=shift;
	my $fromYear=shift;
	my $toYear=shift;

  my $newSubJSON = "$OUT/$ark.json";
  my $nYears = 0;

  say " ...creating the IIIF subcollection: ".$newSubJSON;
  copy($subTemplate,$newSubJSON) or die " # copy failed: $! #";
  my $subJSON = read_file $newSubJSON, {binmode => ':utf8'};
  $subJSON =~ s/<name>/$ark/g;
  $subJSON =~ s/<label>/$title/g;
  $subJSON =~ s/<url>/$gallicaURL$ark/g;
  $subJSON =~ s/<baseURL>/$baseURL/g;
  $subJSON =~ s/<year>//g;

  # generating the years list from the calendar
  say " ...calling the Gallica calendar API for: $ark";
  $urlDate = $urlAPIissue.$ark."/date";
  say "    $urlDate";
  $cmd="curl '$urlDate'";
  my $res = `$cmd`;
  if ($res)  {
   say "... API is responding: ".substr($res,0,150)." ...";
   if (index($res,"<issues ") == -1) { # we should have "<issue>" on the first line
     say "\n   ## Gallica Issues API: no response! ##";
     unlink($newSubJSON);
     return
   }
   my @reponseXML = split '\n', $res;
   foreach my $line (@reponseXML) {
     #say "L: ".$line;
     ( $year ) = $line =~ m/$yearPattern/;
     if ($year) {
			say " year: $year";
			if ($fromYear and  $year lt $fromYear){
				say "   ...jumping $year";
				next;
			}
			if ($toYear and  $year gt $toYear){
				say "   ...ending at $year";
				last;
			}
      $nYears++;
      $subJSON .= "{
          \"id\": \"$baseURL$ark-$year.json\",
          \"label\": \"$title ($year)\",
          \"type\": \"Collection\",
          \"navDate\": \"$year\"
      },";
      # generating the list of issues for a specific year
      writeYearCollection($ark,$title,$year);
    }
  }
  if ($fromYear) {
  	$subJSON =~ s/<description_fr>/Cette collection inclut les fascicules du titre $title pour les ann&#xE9;es $fromYear &#x224; $toYear ($nYears ann&#xE9;es)/g;
  	$subJSON =~ s/<description_en>/This collection includes the issues of $title from $fromYear to $toYear ($nYears years)/g;}
		else {
			$subJSON =~ s/<description_fr>/Cette collection inclut tous les fascicules du titre $title ($nYears ann&#xE9;es)/g;
	  	$subJSON =~ s/<description_en>/This collection includes all the issues of $title ($nYears years)/g;
		}
  chop($subJSON); # remove the last ,
  $subJSON .= "]
    }";
  write_file $newSubJSON, {binmode => ':utf8'}, $subJSON;
  say " --- years found: $nYears ---";
  $totalYears += $nYears;
 }
}

# write the IIIF sub-collection for a year of publication as a IIIF collection
sub writeYearCollection {
	my $ark=shift;
	my $title=shift;

  my $newSubJSON = "$OUT/$ark-$year.json";
  my $nIssues=0;

  say "    ...creating the IIIF subcollection for year: ".$year;
  copy($subTemplate,$newSubJSON) or die " # copy failed: $! #";
  my $subJSON = read_file $newSubJSON, {binmode => ':utf8'};
  $subJSON =~ s/<name>/$ark-$year/g;
  $subJSON =~ s/<label>/$title ($year)/g;
  $subJSON =~ s/<description_fr>/Cette collection inclut tous les fascicules de $title pour l'ann&#xE9;e $year/g;
  $subJSON =~ s/<description_en>/This collection includes all the issues of $title for the year $year/g;
  $subJSON =~ s/<url>/$gallicaURL$ark/g;
  $subJSON =~ s/<baseURL>/$baseURL/g;
  $subJSON =~ s/<year>/$year/g;

  # generating the manifests list from the calendar
  say "    ...calling the Gallica calendar API for title $ark and year: $year";
  $urlDate = $urlAPIissue.$ark."/date&date=".$year;
  say "    $urlDate";
  $cmd="curl '$urlDate'";
  say $cmd;
  my $res = `$cmd`;
  if ($res)  {
   say "... API is responding: ".substr($res,0,150)." ...";
   if (index($res,"<issues ") == -1) {
     say "\n   ## Gallica Issues API: no response! ##";
     unlink($newSubJSON);
     return
   }
   #say $res;
   my @reponseXML = split '\n', $res;
   foreach my $line (@reponseXML) {
     ( $d ) = $line =~ m/$doyPattern/; # day of year
     if ($d) {
      $nIssues++;
      ( $date ) = $line =~ m/$datePattern/; # date
      ( $tmpArk ) = $line =~ m/$arkPattern/;
      # calculate the date
      my $day = date("$year-01-01") + $d - 1; # from Date::Simple
      say "    day: $day";
      $subJSON .= "{
          \"id\": \"$iiifGallicaURL$tmpArk/manifest.json\",
          \"label\": \"$title ($date)\",
          \"type\": \"Manifest\",
          \"navDate\": \"$day\"
       },";
    }}
   }

  chop($subJSON); # remove the last ,
  $subJSON .= "]
    }";
  write_file $newSubJSON, {binmode => ':utf8'}, $subJSON;
  say "    issues found: $nIssues";
}


####################################
##             MAIN               ##
if (scalar(@ARGV)<1)  {
	die $msg;
}

say "\n... IIIF base URL is: $baseURL...";

# output folder
if(-d $OUT){
		say "\n... writing files in $OUT...";
	}
	else{
		mkdir ($OUT) || die ("###  Can't create folder $OUT!  ###\n");
    say "\n... making folder $OUT...";
	}

my $IN=shift @ARGV;

say "\n 1. Reading data $IN...";
# building the data
open(my $data, '<:encoding(utf8)', $IN) or die "### Can't open $IN file: $!\n";

my $csv = Text::CSV->new (
{
    binary => 1,
    auto_diag => 1,
    sep_char => ','
});

#open(DATA, $IN) || die "### Can't open $IN file: $!\n";
#seek $fhTF, 0, 0;
my $nbData=0;

while (my $words = $csv->getline($data))
{
  $nbData++;
  push @externalData,$words;
  for (my $i = 0; $i < 2; $i++)
    {
        print "$words->[$i] ";
    }
    print "\n";
}

# Checking for end-of-file
if (not $csv->eof)
{
    $csv->error_diag();
}
close $data;

#say Dumper @externalData;
say  int($nbData - 1)." items\n--------";

# Generating the top level IIIF collection
my $collName = $externalData[0]->[0];
my $label_fr = $externalData[0]->[1];
my $label_en = $externalData[0]->[2];
my $description_fr = $externalData[0]->[3];
my $description_en = $externalData[0]->[4];
my $url = $externalData[0]->[5];
my $thumbnail = $externalData[0]->[6];
my $fromYear = $externalData[0]->[7];
my $toYear = $externalData[0]->[8];

say "\n 2. Generating the IIIF collection '$collName' ...";
say "  from year $fromYear to $toYear";
continuer();

my $newJSONfile = $collName.".json";
say " ...creating the IIIF collection file: ".$newJSONfile;
copy($topTemplate,$newJSONfile) or die " # copy failed: $! #";
my $currentJSON = read_file $newJSONfile, {binmode => ':utf8'};
$currentJSON =~ s/<name>/$collName/g;
$currentJSON =~ s/<label_fr>/$label_fr/g;
$currentJSON =~ s/<label_en>/$label_en/g;
$currentJSON =~ s/<description_fr>/$description_fr/g;
$currentJSON =~ s/<description_en>/$description_en/g;
$currentJSON =~ s/<url>/$url/g;
$currentJSON =~ s/<thumbnail>/$thumbnail/g;
$currentJSON =~ s/<baseURL>/$baseURL/g;

say " ... writing the collection's items ";
for (my $i = 1; $i < $nbData; $i++)
  {
    say "\n item $i: ". $externalData[$i]->[1];
    $currentJSON .= "{
        \"id\": \"$baseURL$externalData[$i]->[0].json\",
        \"label\": \"$externalData[$i]->[1]\",
        \"type\": \"Collection\"
    }";
    if ($i< $nbData-1) { $currentJSON .= ","}

    # generating the IIIF subcollection for each title
    writeSubcollections($externalData[$i]->[0],$externalData[$i]->[1], $fromYear, $toYear);

  }

$currentJSON .= "]
  }";

write_file $newJSONfile, {binmode => ':utf8'}, $currentJSON;

say "----------";
say " total files generated: ".($totalYears + $nbData - 1);
