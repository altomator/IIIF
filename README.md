# IIIF

This repository shows some IIIF experiments based on [Gallica](gallica.bnf.fr) documents.

***

## IIIF Collections

This basic [IIIF collection](https://iiif.io/api/presentation/2.1/#collection) describes a sub-collection of the [Vogue](https://gallica.bnf.fr/ark:/12148/cb343833568/date.item) magazine (French edition, 1920-1940), organized by publication date (year).

[cb343833568.json](https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json) is the collection's manifest that can be opened in a IIIF compliant viewer like Mirador. 

```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568ocr.json",
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

Once open, the collection can be browsed once open, the collection can be browsed with the Information side panel:

![IIIF collection in Mirador](/images/collection.jpg)

## IIIF Annotations

[IIIF annotations](https://iiif.io/api/presentation/3.0/#56-annotation) are a convenient way to disseminate annotations, transcriptions, comments, etc.  that may have been produced regarding a specific image or region of an image. IIIF annoations follow the [Web Annotation](http://w3.org/TR/annotation-model/) model.

This IIIF demonstration leverages the GallicaPix [objects detection](https://github.com/altomator/Image_Retrieval) data that are available when the GallicaPix database acts a IIIF annotations server.

1. From GallicaPix or using [this URL](https://manuscrits-france-angleterre.org/), open the Vogue June 1920 issue in a Mirador instance, like the BnF https://manuscrits-france-angleterre.org/ portal.

![Open in Mirador](/images/open.jpg)

2. Download the [GallicaPix IIIF annotations](https://raw.githubusercontent.com/altomator/IIIF/main/annotations/bpt6k9604118j_iiif.json) on your local disk: 
3. Load the annotations file in Mirador (on the upper right corner, Download button + Importing Annotation option).
4. Display the annotations (upper left corner, Toogle annotation button).

![GallicaPix Annotations in Mirador](/images/annotations.jpg)

## IIIF and OCR 

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
2. Add a new IIIF resource (the + blue button) and load the [collection manifest](https://raw.githubusercontent.com/altomator/IIIF/main/collection/cb343833568.json) with its URL.
3. Using the Info side panel, navigate to the 1920 sub-collection, then to the June issue and then to image #19 (page folio #3).
4. The text overlay toolbox must be visible, and the OCR content displayed as overlays.

![OCR text as overlays](/images/ocr.jpg)


### OCR as Annotations

OCR 

