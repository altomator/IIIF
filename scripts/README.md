
Usage:
>perl CSV_to_IIIF.pl presse-feminine.csv

The first line of the .csv file stored the editorial data to be feed in the templates.

There are 2 JSON templates:
- one for the top level collection (corresponding to the Gallica Selection top level)
- one for the periodical title, used for for the title level (listing its calendar years) and the year level (listing the manifests for a specific year).

Note: this script needs a internet access, as it makes use of the [Gallica Issues API](https://api.bnf.fr/fr/api-document-de-gallica).

