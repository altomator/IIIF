
# Samples of IIIF Collections

## For Periodicals

This basic [IIIF collection](https://iiif.io/api/presentation/2.1/#collection) describes a sub-collection of the [Vogue](https://gallica.bnf.fr/ark:/12148/cb343833568/date.item) magazine (French edition, 1920-1940), organized by publication date (year).

[cb343833568.json](https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json) is the collection's manifest that can be opened in a IIIF compliant viewer like Mirador: 

[https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json)

Once opened, the collection can be browsed, starting from the Information side panel:

[![IIIF collection in Mirador](/images/collection.jpg)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json)



## Gallica Selections of Thematic Collections

IIIF collections are also useful for organizing documents according to a filing plan. This example is inspired by a [Gallica selection](https://gallica.bnf.fr/html/und/litteratures/series-de-bande-dessinee) of comics published in the press. The [collection](https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json) (API Presentation [v3](https://iiif.io/api/presentation/3.0/#51-collection)) lists comics series as sub-collections. 

[![IIIF collection in Mirador](/images/bd.jpg)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.json)

Launching Mirador with both a comics sample and the collection (as in the screenshot) is done with some [Javascript](https://raw.githubusercontent.com/altomator/IIIF/main/collection/collection-bd.html).

Multiple collections can be used to organize a complex navigation scheme as Mirador windows. In this example, comic book content is organized around two entry points, by series and by authors.

![IIIF collection in Mirador](/images/bd2.jpg)



This last example (produced using this [Perl script](https://github.com/altomator/IIIF/tree/main/scripts)) shows the complete Gallica thematic selection of [women's magazines and newspapers](https://gallica.bnf.fr/html/presse-et-revues/presse-feminine) transcribes as a [IIIF collection](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/presse_feminine/collection.json). 

[![IIIF Magazines Collection in Mirador](/images/feminine.png)](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/selection/presse_feminine/collection.json)


## NewsEye european project

Using the same method, the French dataset (6 titles) used within the [NewsEye](https://www.newseye.eu/) european project is also disseminated as a [IIIF collection](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/dataset_newseye_fr/collection.json).
