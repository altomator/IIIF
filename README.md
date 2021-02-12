# IIIF

## IIIF Collection

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
		},...],
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

Each sub-collection links to the IIIF document manifests:

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




