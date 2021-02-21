# IIIF Experiments

This repository shows some IIIF experiments based on [Gallica](gallica.bnf.fr) documents.

***

## Documents comparaison

[Gallica IIIF manifest](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)

[![Gallica](images/iiif-drag-n-drop.png)](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)

[Standford manifest](https://purl.stanford.edu/tm309fq4104/iiif/manifest)

![Standford](images/iiif-drag-n-drop.png)


## Deep zoom with large images

Large composite file of images can be fragmented into smaller tiled units allowing rapid load and smooth  deep zoom navigation in a browser.
This [example](https://dm0lds.wordpress.com/2018/11/02/20-370-visages/) makes use of OpenSeaDragon, an open-source, web-based viewer for high-resolution zoomable images.  OpenSeaDragon has [support](https://openseadragon.github.io/examples/tilesource-iiif/) for the IIIF Image API (the example is not IIIF-compliant).

![Deep zoom (38 800 × 21 000 pixels)](https://dm0lds.files.wordpress.com/2015/11/visages.jpg)




## IIIF Collections

This basic [IIIF collection](https://iiif.io/api/presentation/2.1/#collection) describes a sub-collection of the [Vogue](https://gallica.bnf.fr/ark:/12148/cb343833568/date.item) magazine (French edition, 1920-1940), organized by publication date (year).

[cb343833568.json](https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json) is the collection's manifest that can be opened in a IIIF compliant viewer like Mirador. 

```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json",
  "@type": "sc:Collection",
  ...
  "related": [{
			"@id": "https://gallica.bnf.fr/ark:/12148/cb343833568/date",
			"format": "text/html",
			"label": "Digital object in Gallica"
		}, ...],
  "seeAlso": [...],
  "collections": [
    {
      "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1920ocr.json",
      "@type": "sc:Collection",
      "label": "1920 (test OCR)"
    },{
      "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1921.json",
      "@type": "sc:Collection",
      "label": "1921"
    }, ...
      ]
  }
```

Each sub-collection must setup links to the IIIF document manifests:

```json
{
	"@context": "http://iiif.io/api/presentation/2/context.json",
	"@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568-1920ocr.json",
	"@type": "sc:Collection",
	"label": "Vogue 1920 (ocr)",
	"description": "https://gallica.bnf.fr/ark:/12148/cb343833568/date1920",
	"attribution": "BnF - Gallica, gallica.bnf.fr",
	"logo": "https://gallica.bnf.fr/mbImage/logos/logo-bnf.png",
	"manifests": [{
		"@id": "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json",
		"@type": "sc:Manifest",
		"label": "Vogue, juin 1920"
	},{
		"@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/bpt6k9604118j.json",
		"@type": "sc:Manifest",
		"label": "Vogue, juin 1920 (avec OCR)"
	}
	]
}
```

The Biblissima Mirador 3 instance can be used to open this collection:
[https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json](https://iiif.biblissima.fr/mirador3/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json)

Once open, the collection can be browsed, starting from the Information side panel:

![IIIF collection in Mirador](/images/collection.jpg)

## IIIF Annotations

[IIIF annotations](https://iiif.io/api/presentation/3.0/#56-annotation) are a convenient way to disseminate annotations, transcriptions, comments, etc., that may have been produced regarding a specific image or region of an image. IIIF annotations follow the [Web Annotation](http://w3.org/TR/annotation-model/) model.

This IIIF demonstration leverages the GallicaPix [objects detection](https://github.com/altomator/Image_Retrieval) data that are available when the GallicaPix database acts a IIIF annotations server.

1. From GallicaPix or using [this URL](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9604118j/manifest.json&page=11&lang=en), open the Vogue [June 1920](https://gallica.bnf.fr/ark:/12148/bpt6k9604118j/f11.item) issue in a Mirador instance, like the BnF https://manuscrits-france-angleterre.org/ portal.

![Open in Mirador](/images/open.jpg)

2. Download the [GallicaPix IIIF annotations](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/bpt6k9604118j_iiif.json) on your local disk. 
3. Load the annotations file in Mirador (on the upper right corner, Download button + Importing Annotation option).
4. Display the annotations (upper left corner, Toogle annotations button).

![GallicaPix Annotations in Mirador](/images/annotations.jpg)

These annotations could even be searchable using the [IIIF Content Search API](https://iiif.io/api/search/1.0/).

## IIIF and OCR 

Texts produced by OCR engines can be disseminated using various mechanisms offered by IIIF (look at this [work](https://iiif.io/community/groups/text-granularity/charter/)).

### SeeAlso
OCR resources like ALTO files may be linked to a IIIF manifest as seeAlso content, attached to a specific canvas. In this IIIF document manifest ([bpt6k9604118j](https://github.com/altomator/IIIF/blob/main/collection/bpt6k9604118j.json) ID), we are linking the ALTO file X/X00000019.xml to canvas #19:

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

These ALTO files may be dereferenced on the fly thanks to the Gallica OCR API:
[ALTO file #19, document ID bpt6k9604118j](https://gallica.bnf.fr/RequestDigitalElement?O=bpt6k9604118j&E=ALTO&Deb=19)

IIIF viewers need an extension to display the OCR content. Johannes Baiter (MDZ Digital Library team, Bavarian State Library) developped such a Mirador 3 [plugin](https://github.com/dbmdz/mirador-textoverlay) that can be used to open our OCR test:

1. Open the Mirador demo instance: https://mirador-textoverlay.netlify.app/
2. Add a new IIIF resource (use the + blue button) and load the Vogue [collection manifest](https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json) with its URL.
3. Using the Info side panel, navigate to the 1920 sub-collection, then to the June issue and finally to image #19 (page folio #3).
4. The text overlay toolbox must be visible, and the OCR content displayed as overlays.

![OCR text as overlays](/images/ocr.jpg)


### OCR as Annotations

OCR text may be described as an annotations list linked to a canvas (look at this [IIIF recipe](https://iiif.io/api/cookbook/recipe/0068-newspaper/)). 

### OCR as XML fragments

Transcription of content into XML, XPaths being used to select a [segment](https://iiif.io/api/metadata/1.0/#api-advanced-segments).

## IIIF Curation

## IIIF Stories

IIIF can be used for digital storytelling round  images and documents. Look at the Cogapp [Storiiies](https://www.cogapp.com/storiiies) web app and this [example](https://storiiies.cogapp.com/viewer/ae11y/Egyptien19-Papyrus-de-Padiamonnebnsouttaouy) exploring an Egyptian [papyrus](https://gallica.bnf.fr/ark:/12148/btv1b8304462j.image). See also this [post](https://gallica.bnf.fr/blog/27052020/le-livre-pour-sortir-au-jour-ou-livre-des-morts-des-anciens-egyptiens?mode=desktop) (FR).  

![Storiiies](/images/papyrus.jpg)

