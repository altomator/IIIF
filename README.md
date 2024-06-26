# IIIF Experiments

This repository shows some IIIF experiments based on [Gallica](gallica.bnf.fr) content and real life use cases when working with IIIF documents (see also this [BnF-TNA work](https://docs.google.com/presentation/d/1Q95-5BD55uXJ3fFRbbGK0iWjQI4luByj)). Most of the content is IIIF Presentation version 2 based. 

- [*Comparing Documents and Images*](#comparing-documents-and-images)
- [*Deep Zoom with large images*](#deep-zoom-with-large-images)
- [*IIIF Collections*](#iiif-collections)
- [*IIIF Annotations*](#iiif-annotations)
- [*IIIF and maps*](#iiif-and-maps)
- [*IIIF Ranges*](#iiif-range)
- [*IIIF and OCR*](#iiif-and-ocr)
- [*IIIF and A/V*](#iiif-and-av)
- [*IIIF Curation*](#iiif-curation)
- [*IIIF Stories*](#iiif-stories)

***

## Comparing Documents and Images

### Comparing Documents with Mirador
Comparing images was one of the initial objectives of the IIIF initiative. Just drag and drop the IIIF icons in any IIIF viewer (like this [one](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)) to open side by side a BnF and a Standford digital edition of *Sidereus nuncius, magna... spectacula pandens... quae a Galileo Galileo,...* ([RES P-V-743](https://gallica.bnf.fr/ark:/12148/bpt6k9907264/))

[Gallica IIIF manifest](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)

[![Gallica](images/iiif-drag-n-drop.png)](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json?manifest=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)


[Standford Libraries IIIF manifest](https://purl.stanford.edu/tm309fq4104/iiif/manifest.json)

[![Standford](images/iiif-drag-n-drop.png)](https://purl.stanford.edu/tm309fq4104/iiif/manifest.json?manifest=https://purl.stanford.edu/tm309fq4104/iiif/manifest.json)

[![Comparing documents)](images/2documents.jpg)](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)

### Comparing Documents and Images with Mirador
Comparing a IIIF document and a local images is also possible in [Mirador 3](https://projectmirador.org/embed/?iiif-content=). Open this [black & white photo](https://gallica.bnf.fr/ark:/12148/btv1b531454753) in Mirador 3 using the drag-and-drop technique: 

[![Local images](images/iiif-drag-n-drop.png)](https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/manifest.json?manifest=https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/manifest.json)

Then download its [colorized](images/btv1b531454753-Enhanced-Colorized.jpg) version (produced with [DeOldify](https://www.myheritage.fr/incolor/))  on your disk. Finally, drag and drop the image file in Mirador.

[![Comparing images: non IIIF image](images/2images.jpg)](https://projectmirador.org/embed/?iiif-content=https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/manifest.json)

### Creating a mixed Manifest including Documents and Images

A [mixed manifest](manifests/colorized-manifest.json) may also be build agregating the non IIIF colorized version and the original IIIF document as a sequence of canvas. Open it in [Mirador 3](https://projectmirador.org/embed/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/colorized-manifest.json). (Based on [Glen Robson](https://glenrobson.github.io/) sample.)

[![Comparing images: mixed images](images/mixte.jpg)](https://projectmirador.org/embed/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/colorized-manifest.json)


### Layering Multiple Images

Digitally layering multiple images can also be needed for specific use cases. Each image can be gradually exposed by the user to allow the differences to be compared (e.g. the [Raphael Cartoons](https://www.vam.ac.uk/articles/explore-the-raphael-cartoons#slideshow=3891&slide=0), Victoria and Albert Museum)

First, the [Compariscope](https://github.com/vanda/iiif-features#the-compariscope) utility app (Luca Carini, V&A) can be used to align IIIF documents. In this example, we align three states of a [Rembrandt engraving](https://gallica.bnf.fr/ark:/12148/btv1b105218666?rk=343349;2). A the end of the editing, we copy the alignment data into the manifest.

Click on the illustration bellow to open Compariscope on the Rembrandt example, built with a [IIIF manifest](https://raw.githubusercontent.com/altomator/IIIF/main/manifests/layerstack-rembrandt.json) listing 3 Gallica documents.

[![Compariscope](images/rembrandt1.jpg)](https://vanda.github.io/iiif-features/compariscope.html?manifest=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/layerstack-rembrandt.json)

Then the manifest is visualised using [LayerStack](https://github.com/vanda/layerstack), a viewer based on OpenSeaDragon. Click on the illustration to see the result.

[![LayerStack](images/rembrandt2.jpg)](https://altomator.github.io/IIIF/#0)

Other apps like [Leaflet-iiif](https://github.com/mejackreed/Leaflet-IIIF) offer different approaches for layering images. Leaflet-iiif is a JavaScript library for creating zoomable views of IIIF images. In this [example](https://altomator.github.io/IIIF/index-leaflet-colors.html) based on [https://bl.ocks.org/mejackreed](https://bl.ocks.org/mejackreed/raw/cc99c87a27542fdcd5987076549ff271/), we display side-by-side the original photograph from the above example and its colorized version (hosted by iiifhosting.com) 

[![Leaflet-iiif](images/colors.jpg)](https://altomator.github.io/IIIF/index-leaflet-colors.html)

This other [example](https://altomator.github.io/IIIF//index-leaflet_btv1b10303825m.html) displays the [Quinatzin Mapa](https://gallica.bnf.fr/ark:/12148/btv1b10303825m/f1), on which technical photography techniques have been applied (see [1](https://bnf.hypotheses.org/577) and [2](https://chsopensource.org/technical-photography-of-aztec-manuscripts-in-paris/) for details on the scientific background), and its ultra violet version. Mixing several techniques ( XRF or vis-NIR spectrophotometer, etc.) in addition to IR and fluorescent UV photographs helps to study the nature of the materials used. Traditionally, IR images are used alone to better see carbon black patterns (iron gall inks will be almost transparent in IR) but IR images are also used to produce false color images. By also using the visible images, it is sometimes possible to identify materials that appear similar in the visible but are different in the IR. Fluorescence under UV light can highlight materials that fluoresce (e.g. some organic materials used as binder or varnish). 

[![Leaflet-iiif](images/mappa.jpg)](https://altomator.github.io/IIIF//index-leaflet_btv1b10303825m.html)

This last Leaflet-iiif example derived from [https://bl.ocks.org/mejackreed](https://bl.ocks.org/mejackreed/6e3fb8e69189dadb4be7d0926a6a14a5) uses the Leaflet plugin Icon Layers, which allows layers switching control with a set of icons. The previous example is now implemented with [IR and UV versions](https://altomator.github.io/IIIF//index-leaflet_selector.html).

[![Leaflet-iiif](images/mappa2.jpg)](https://altomator.github.io/IIIF//index-leaflet_selector.html)



## Deep zoom with large images

Large composite file of images can be fragmented into smaller tiled units allowing rapid load and smooth  deep zoom navigation in a browser.
This [example](https://altomator.github.io/IIIF/megapixels/Visages-1418.html), based on 20k faces extrated from Gallica (1910-1920), makes use of OpenSeaDragon, an open-source, web-based viewer for high-resolution zoomable images.  OpenSeaDragon has [support](https://openseadragon.github.io/examples/tilesource-iiif/) for the IIIF Image API (this example is not IIIF-compliant).

[![Deep zoom (38 800 × 21 000 pixels)](https://dm0lds.files.wordpress.com/2015/11/visages.jpg)](https://altomator.github.io/IIIF/megapixels/Visages-1418.html)

[Another example on Vogue frontpages](https://altomator.github.io/IIIF/megapixels/Vogue.html)

*tbc: large Cassini map *


## IIIF Collections 

### For Periodicals

This basic [IIIF collection](https://iiif.io/api/presentation/2.1/#collection) describes a sub-collection of the [Vogue](https://gallica.bnf.fr/ark:/12148/cb343833568/date.item) magazine (French edition, 1920-1940), organized by publication date (year).

[cb343833568.json](https://raw.githubusercontent.com/altomator/IIIF/main/collection/vogue-avec-ocr/cb343833568.json) is the collection's manifest that can be opened in a IIIF compliant viewer like Mirador. 

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json",
  "type": "Collection",
  ...
  "related": [{
			"id": "https://gallica.bnf.fr/ark:/12148/cb343833568/date",
			"format": "text/html",
			"label": "Gallica periodical: Vogue"
		}, ...],
  "seeAlso": [...],
  "items": [
    {
      "id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1920.json",
      "type": "Collection",
      "label": "Vogue (1920)"
    },{
      "id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1921.json",
      "type": "Collection",
      "label": "Vogue (1921)"
    }, ...
      ]
  }
```

Each sub-collection must setup links to the IIIF document manifests (or to other sub-collections):

```json
{
	"@context": "http://iiif.io/api/presentation/3/context.json",
	"id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1920.json",
	"type": "Collection",
	"label": "Vogue 1920",
	"description": "This collection gathers all the issues of the title Vogue for the year 1920",
	"attribution": "BnF - Gallica, gallica.bnf.fr",
	"logo": "https://gallica.bnf.fr/mbImage/logos/logo-bnf.png",
	"related": [{
			"id": "https://gallica.bnf.fr/ark:/12148/cb343833568/date1920",
			"format": "text/html",
			"label": { "fr": [ "Périodique Gallica : Vogue (1920)" ],"en": [ "Gallica periodical: Vogue (1920)" ] }
		}],
	"items": [{
		"id": "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json",
		"type": "Manifest",
		"label": "Vogue, 15 juin 1920",
		
	},..
	]
}
```

The Biblissima Mirador 3 instance can be used to open this collection:
[https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/vogue-avec-ocr/cb343833568.json](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/vogue-avec-ocr/cb343833568.json)

Once open, the collection can be browsed, starting from the Information side panel:

[![IIIF collection in Mirador](/images/collection.jpg)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/vogue-avec-ocr/cb343833568.json)


### For Thematic Collections

IIIF collections are also useful for organizing documents according to a filing plan. This example is inspired by a [Gallica selection](https://gallica.bnf.fr/html/und/litteratures/series-de-bande-dessinee) of comics published in the press. The [collection](https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json) (API Presentation [v3](https://iiif.io/api/presentation/3.0/#51-collection)) lists comics series as sub-collections. 

[![IIIF collection in Mirador](/images/bd.jpg)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json)

Launching Mirador with both a comics sample and the collection (as in the screenshot) is done with some [Javascript](https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.html):

```
...
windows: [
         {
           manifestId: 'https://gallica.bnf.fr/iiif/ark:/12148/bpt6k4130558s/manifest.json',
           canvasId: "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k4130558s/canvas/f28" //open on image #28
         },
         {
           collectionPath: [
              "https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json"
            ] ,
            manifestId: "https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json"
         }
       ],
       catalog: [
         { manifestId: "https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json" },
       ]
...
```

Multiple collections can be used to organize a complex navigation scheme as Mirador windows. In this example, comic book content is organized around two entry points, by series and by authors.

![IIIF collection in Mirador](/images/bd2.jpg)

This final example (produced using this [Perl script](https://github.com/altomator/IIIF/tree/main/scripts)) shows the complete Gallica thematic selection of [women's magazines](https://gallica.bnf.fr/html/presse-et-revues/presse-feminine) transcribes as a [IIIF collection](https://raw.githubusercontent.com/altomator/IIIF/main/collection/presse_feminine/collection.json). 

[![IIIF Magazines Collection in Mirador](/images/feminine.png)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/presse_feminine/collection.json)

Same experiment for a collection of [Paris maps](https://mirador.bnf.fr/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cartes/plans_paris.json) or for a collection of [music scores](https://mirador.bnf.fr/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/collabscore.json) ([avec UV](https://uv-v3.netlify.app/#?c=&m=&s=&cv=&manifest=https://raw.githubusercontent.com/altomator/IIIF/main/collection/collabscore.json)).

## IIIF Annotations

[IIIF annotations](https://iiif.io/api/presentation/3.0/#56-annotation) are a convenient way to disseminate annotations, transcriptions, comments, etc., that may have been produced regarding a specific image or region of an image. IIIF annotations follow the Open Annotations and the [W3C Web Annotation](http://w3.org/TR/annotation-model/) model for IIIF version 3.0.

### AI Annotations

This IIIF demonstration leverages the GallicaPix [objects detection](https://github.com/altomator/Image_Retrieval) data that are available when the GallicaPix database acts a IIIF annotation server. In this scenario, the annotations are stored somewhere, delivered by a server and hooked up to documents thanks to user interactions in Mirador (an instance of Mirador could also been programmatically hooked up to a database to avoid human interaction). 

1. From GallicaPix (IIIF local menu available on each illustration) or using [this URL](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json&page=11&lang=en), open the Vogue [June 1920](https://gallica.bnf.fr/ark:/12148/bpt6k9604118j/f11.item) issue in a Mirador instance, like the BnF https://manuscrits-france-angleterre.org/ portal.

[![Open in Mirador](/images/open.jpg)](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json&page=11&lang=en)

2. Download the [GallicaPix IIIF annotations](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/bpt6k9604118j_iiif.json) for this June 20 issue on your local disk (or export it from [GallicaPix](https://gallicapix.bnf.fr/rest?run=findIllustrations-app.xq&locale=fr&action=first&start=1&corpus=vogue&id=bpt6k9604118j&CS=0.5&operator=and&sourceTarget=&keyword=) using the IIIF menu). 
3. Load the JSON annotations file in Mirador (on the upper right corner, Download button + Importing Annotation option).
4. Display the annotations (upper left corner, Toogle annotations button).

[![GallicaPix Annotations in Mirador](/images/annotations.jpg)](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json&page=11&lang=en)

In the previous scenario, the manifest and its annotations are not formally linked. Other use cases may imply to directly link the annotations to the manifest, using the otherContent feature. A link to the annotations file is added into the first canvas of the manifest:

```
...
,
      "otherContent": [
    {
        "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/annotations/bpt6k9604118j_iiif.json",
        "@type": "sc:AnnotationList",
        "label": "Annotations produced by GallicaPix"
    }
       ],
...
```
Now the annotations are visible when one opens the manifest in [Mirador](https://manuscrits-france-angleterre.org/view3if/?target=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/bpt6k9604118j_linked_annot.json&page=22&lang=fr).

Obviously, as we're dealing with a server, the otherContent link in our [manifest](https://raw.githubusercontent.com/altomator/IIIF/main/manifests/bpt6k9604118j_server_annot.json) might be a direct call to the [end-point](https://gallicapix.bnf.fr/rest?run=exportAnnotationsIIIF.xq&corpus=vogue&id=bpt6k9604118j&locale=en) outputing the JSON data (see in [Mirador](https://manuscrits-france-angleterre.org/view3if/?target=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/bpt6k9604118j_server_annot.json&page=22&lang=en)):

```
...
,
      "otherContent": [
    {
        "@id": "https://gallicapix.bnf.fr/rest?run=exportAnnotationsIIIF.xq&corpus=vogue&id=bpt6k9604118j&locale=en",
        "@type": "sc:AnnotationList",
        "label": "Annotations produced by GallicaPix"
    }
       ],
...
```


Note: The content of these annotations could even be searchable using the [IIIF Content Search API](https://iiif.io/api/search/1.0/).


### Scientific Annotations

Some of the Mandragore database's enlightened manscripts has been exported as [IIIF annotations](https://api.bnf.fr/fr/mandragore-echantillon-segmente-2019). After opening a [manuscript](https://manuscrits-france-angleterre.org/view3if/?target=https%3A%2F%2Fgallica.bnf.fr%2Fiiif%2Fark%3A%2F12148%2Fbtv1b8419219x%2Fmanifest.json&page=12&lang=en) in an Mirador instance, one can visualize the [Mandragore annotations](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/Arabe-274.json). Try it on the [Arabe-274](https://gallica.bnf.fr/ark:/12148/bpt6k9604118j) manuscript.

[![Mandragore annotations](images/arabe-274.jpg)](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json&page=11&lang=en)

## IIIF and maps

The [IIIF Georeference extension](https://iiif.io/api/extension/georef/) allows to store the metadata needed to georeference a IIIF resource in a georeference annotation.

Example for this [map](https://gallica.bnf.fr/ark:/12148/btv1b530951918) (Carte Cassini 079, région de Reims) which has been georeferenced using [AllMaps Editor](https://editor.allmaps.org/). The illustrated region on the map is specified using an SVG selector drawn with AllMaps Editor. GCPs and selector are outputed as an IIIF [Annotation Page](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/annotation-btv1b530951918_editor.json).

Open it in [AllMaps Viewer](https://viewer.allmaps.org/?url=https%3A%2F%2Fraw.githubusercontent.com%2Faltomator%2FIIIF%2Fmain%2Fannotations%2Fannotation-btv1b530951918_editor.json)

![AllMaps Viewer](images/allmaps.jpg)

For automation purposes, the same map can be georeferenced with 2 GCPs extracted from the [BnF catalog's record](https://catalogue.bnf.fr/ark:/12148/cb40860573p.intermarc) (field 042, scale and coordinates):

```
042 0. $a a $u hi $b 86400 $d E0035700 $e E0050200 $f N0493100 $g N0490200
```
In this case (see the [Annotation Page](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/annotation-btv1b530951918_catalog.json)), there is no SVG selector and the third GCP is deduced from existing GCPs (with an obviously imprecise result).

Open it in [AllMaps Viewer](https://viewer.allmaps.org/?url=https%3A%2F%2Fraw.githubusercontent.com%2Faltomator%2FIIIF%2Fmain%2Fannotations%2Fannotation-btv1b530951918_catalog.json). 

## IIIF Ranges

ToC, lists, index can be exposed as a structure of Ranges. This v3.0 [manifest](https://raw.githubusercontent.com/altomator/IIIF/main/manifests/VictorHugo_manifest_v3.json) showcases how to expose a ToC from a [monography](https://gallica.bnf.fr/ark:/12148/bpt6k1264641j/f512.item) using this [feature](https://iiif.io/api/presentation/3.0/#54-range).


## IIIF and OCR 

Texts produced by OCR engines can be disseminated using various mechanisms offered by IIIF (look at this [work](https://iiif.io/community/groups/text-granularity/charter/)).

### SeeAlso
OCR resources like ALTO files can be linked to a IIIF manifest as seeAlso content, attached to a specific canvas. In this IIIF document manifest ([bpt6k9604118j](https://github.com/altomator/IIIF/blob/main/collection/vogue-avec-ocr/bpt6k9604118j.json) ID), we are linking the ALTO file X/X00000019.xml to canvas #19:

```json
...
, {
      "@id" : "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/canvas/f19",
      "label" : "3",
      "height" : 5221,
      "width" : 3791,
      "images" : [ {
        "motivation" : "sc:painting",
        "on" : "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/canvas/f19",
        "resource" : {
          "format" : "image/jpeg",
          "service" : {
            "profile" : "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",
            "@context" : "http://iiif.io/api/image/1/context.json",
            "@id" : "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/f19"
          },
          ...
        },
        "@type" : "oa:Annotation"
      } ],
      "seeAlso": {
            "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/X/X00000019.xml",
            "profile": "http://www.loc.gov/standards/alto/ns-v4#",
            "format": "text/xml"
          }, ...
```

These ALTO files could also be dereferenced on the fly thanks to the Gallica OCR API:
[ALTO file #19, document ID bpt6k9604118j](https://gallica.bnf.fr/RequestDigitalElement?O=bpt6k9604118j&E=ALTO&Deb=19)

IIIF viewers need an extension to display the OCR content. Johannes Baiter (MDZ Digital Library team, Bavarian State Library) developped such a Mirador 3 [plugin](https://github.com/dbmdz/mirador-textoverlay) that can be used to open our OCR test:

1. Open the Mirador demo instance: https://mirador-textoverlay.netlify.app/
2. Add a new IIIF resource (use the + blue button) and load the Vogue [collection manifest](https://raw.githubusercontent.com/altomator/IIIF/main/collection/vogue-avec-ocr/cb343833568ocr.json) with its URL.
3. Using the Info side panel, navigate to the 1920 sub-collection, then to the June issue and finally to image #19 (page folio #3).
4. The text overlay toolbox must be visible, and the OCR content displayed as overlays.

![OCR text as overlays](/images/ocr.jpg)

Same is true for transcription produced by HTR. Open with the MDZ plug-in this [Michel Foucault reading notes](https://raw.githubusercontent.com/altomator/IIIF/main/collection/FFL-avec-htr/btv1b105425466.json) transcribed by the ANR [Fiches de lecture Michel Foucault project](https://odhn.ens.psl.eu/article/foucault-fiches-de-lecture-ffl)
 thanks to Transcribus, and jump to page 4 (note: scaling problem).


### OCR as Annotations

OCR text can be described as an annotations list linked to a canvas (look at this [IIIF recipe](https://iiif.io/api/cookbook/recipe/0068-newspaper/)). ALTO XML can be easily converted to IIIF annotations with [XSLT scripts](https://glenrobson.github.io/iiif_stuff/alto2annotations/). 

### OCR as XML fragments

Transcription of content into XML, XPaths being used to select a [segment](https://iiif.io/api/metadata/1.0/#api-advanced-segments).

## IIIF and A/V

### Video
This simple  manifest  presents a single video file in a IIIF Presentation resource. The [video](https://gallica.bnf.fr/ark:/12148/bpt6k1321500g/f1.media) file is referenced as a Gallica URL. 
Mirador and Universal Viewer can handle this [A/V manifest](https://raw.githubusercontent.com/altomator/IIIF/main/manifests/video.json).

[![Video in UV](/images/uv.png)](https://uv-v3.netlify.app/#?c=&m=&s=&cv=&manifest=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/video.json)

### Audio

tbc

### 

## IIIF Curation

*tbc* 
http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://mp.ex.nii.ac.jp/api/curation/json/962dc427-6241-4200-82ad-69a0821b573c&lang=en


## Digital mediation and IIIF 

IIIF can be used for digital storytelling round images and documents. 

### Storiiies
Look at the Cogapp [Storiiies](https://www.cogapp.com/storiiies) web app and this [example](https://storiiies.cogapp.com/viewer/ae11y/Egyptien19-Papyrus-de-Padiamonnebnsouttaouy) exploring an Egyptian [papyrus](https://gallica.bnf.fr/ark:/12148/btv1b8304462j.image). See also this [post](https://gallica.bnf.fr/blog/27052020/le-livre-pour-sortir-au-jour-ou-livre-des-morts-des-anciens-egyptiens?mode=desktop) (FR).  

![Storiiies](/images/papyrus.jpg)

The stories editor is [here](https://storiiies-editor.cogapp.com/).

### Exhibit

[Exhibit](https://exhibit.so) is another IIIF applications editor developped by [Mnemoscene](https://mnemoscene.io/).

This example demonstrates how to use Exhibit to create narratives based on IIIF documents:

[![Exhibit](images/ROL80029.jpg)](https://exhibit.so/exhibits/A1hizd7vics1l7gFCnXm)

Opening a IIIF manifest to start working with Exhibit is straightforward:

[![Add to Exhibit](images/exhibit.jpg)](https://exhibit.so/exhibits/create?item=https://gallica.bnf.fr/iiif/ark:/12148/btv1b53096152d/manifest.json)


### CanvasPanel

Digirati [CanvasPanel](https://canvas-panel.netlify.app/#/about) is another way to build IIIF applications with complex layout and  rendering requirements.

### Almanac as a navigator extension

A [Chrome extension](https://altomator.github.io/IIIF/almanach/index.html) that shows a random document from the [Gallica digital library](http://www.gallica.bnf.fr) according to the current season.

This is a fork from the [David Rumsey Map Tab](https://chrome.google.com/webstore/detail/david-rumsey-map-collecti/fnheacjohhlddiffbmafmpoblbkfgmde) by [mejackreed](https://github.com/mejackreed/DavidRumseyMapTab), which is itself a fork from the original [MapTab](https://chrome.google.com/webstore/detail/maptab/dmabflbokojjfjicmbjjfnmodihciemo) by [bsudekum](https://github.com/bsudekum).

