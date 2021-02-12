# IIIF

## IIIF Collections

This IIIF test collection describes a sub-collection of the [Vogue](https://gallica.bnf.fr/ark:/12148/cb343833568/date.item) magazine (French edition, 1920-1940), organized by publication date (year).

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

