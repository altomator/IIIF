# IIIF Experiments

This repository shows some IIIF experiments based on [Gallica](gallica.bnf.fr) documents.

- *Comparing Documents and Images*
- *Deep Zoom with large images*
- *IIIF Collections*
- *IIIF Annotations*
- *IIIF and OCR*
- *IIIF Curation*
- *IIIF Stories*

***

## Comparing Documents and Images

### Comparing Documents with Mirador
Comparing images was one of the initial objectives of the IIIF initiative. Just drag and drop the IIIF icons in any IIIF viewer (like this [one](https://manuscrits-france-angleterre.org/view3if/?target=https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)) to open side by side a BnF and a Standford digital edition of *Sidereus nuncius, magna... spectacula pandens... quae a Galileo Galileo,...* ([RES P-V-743](https://gallica.bnf.fr/ark:/12148/bpt6k9907264/))

[Gallica IIIF manifest](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)

[![Gallica](images/iiif-drag-n-drop.png)](https://gallica.bnf.fr/iiif/ark:/12148/bpt6k9907264/manifest.json)


[Standford Libraries IIIF manifest](https://purl.stanford.edu/tm309fq4104/iiif/manifest)

[![Standford](images/iiif-drag-n-drop.png)](https://purl.stanford.edu/tm309fq4104/iiif/manifest.json)

![Comparing documents)](images/2documents.jpg)

### Comparing Documents and Images with Mirador
Comparing a IIIF document and a local images is also possible in [Mirador 3](https://projectmirador.org/embed/?iiif-content=). Open this [black & white photo](https://gallica.bnf.fr/ark:/12148/btv1b531454753) in Mirador 3 using the drag-and-drop technique: 

[![B&W](images/iiif-drag-n-drop.png)](https://gallica.bnf.fr/ark:/12148/btv1b531454753?manifest=https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/manifest.json)

Then download its [colorized](images/btv1b531454753-Enhanced-Colorized.jpg) version (produced with [DeOldify](https://www.myheritage.fr/incolor/))  on your disk. Finally, drag and drop the image file in Mirador.

![Comparing images: non IIIF image](images/2images.jpg)

### Creating a mixed Manifest including Documents and Images

A [mixed manifest](manifests/colorized-manifest.json) may also be build agregating the non IIIF colorized version and the original IIIF document as a sequence of canvas. Open it in [Mirador 3](https://projectmirador.org/embed/?iiif-content=https://raw.githubusercontent.com/altomator/IIIF/main/manifests/colorized-manifest.json). (Based on [Glen Robson](https://glenrobson.github.io/) sample.)

![Comparing images: mixed images](images/mixte.jpg)

### Layering Multiple Images

Digitally layering multiple images can also be needed for specific use cases. Each image can be gradually exposed by the user to allow the differences to be compared (e.g. the [Raphael Cartoons](https://www.vam.ac.uk/articles/explore-the-raphael-cartoons#slideshow=3891&slide=0), Victoria and Albert Museum)

First, the [Compariscope](https://github.com/vanda/iiif-features#the-compariscope) utility app (Luca Carini) can be used to align IIIF documents. In this example, we align three states of a [Rembrandt engraving](https://gallica.bnf.fr/ark:/12148/btv1b105218666?rk=343349;2).

![Comparing images: mixed images](images/rembrandt1.jpg)

Then the manifest is visualised using [LayerStack](https://github.com/vanda/layerstack), a viewer based on OpenSeaDragon.

![Comparing images: mixed images](images/rembrandt2.jpg)

*tbc: using [Leaflet-iiif](https://bl.ocks.org/mejackreed)*
https://bl.ocks.org/mejackreed/raw/cc99c87a27542fdcd5987076549ff271/





## Deep zoom with large images

Large composite file of images can be fragmented into smaller tiled units allowing rapid load and smooth  deep zoom navigation in a browser.
This [example](https://dm0lds.wordpress.com/2018/11/02/20-370-visages/) makes use of OpenSeaDragon, an open-source, web-based viewer for high-resolution zoomable images.  OpenSeaDragon has [support](https://openseadragon.github.io/examples/tilesource-iiif/) for the IIIF Image API (the example is not IIIF-compliant).

![Deep zoom (38 800 × 21 000 pixels)](https://dm0lds.files.wordpress.com/2015/11/visages.jpg)

*tbc: large map *


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

*tbc: [embedded collections v3](https://glenrobson.github.io/iiif_stuff/collections) *


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

## IIIF Range

*tbc*

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

OCR text may be described as an annotations list linked to a canvas (look at this [IIIF recipe](https://iiif.io/api/cookbook/recipe/0068-newspaper/)) and this ALTO XML to IIIF annotations [XSLT script](https://glenrobson.github.io/iiif_stuff/alto2annotations/). 

### OCR as XML fragments

Transcription of content into XML, XPaths being used to select a [segment](https://iiif.io/api/metadata/1.0/#api-advanced-segments).

## IIIF Curation

*tbc* 

## IIIF Stories

IIIF can be used for digital storytelling round  images and documents. 

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


