# convert Roboflow annotations to IIIF annotations (API Presentation 2.0)
# The annotations can then be uploaded in a IIIF viewer
# Usage:
# >python3 roboflow2iiif.py btv1b10537237h 29 2.8 roboflow-btv1b10537237h-29.json

import json
import argparse

parser = argparse.ArgumentParser(description='Convert Roboflow annotations to IIIF annotations (API Presentation 2.0)')
parser.add_argument('ark',  type=str,
                    help='ARK identifier')
parser.add_argument('page',  type=int,
                    help='page number')
parser.add_argument('ratio',  type=float, default=1.0,
                    help='image dimensions ratio')
parser.add_argument('data',  type=str,
                    help='input JSON data')

args = parser.parse_args()

ark=args.ark
page=args.page
data=args.data
ratio=args.ratio
out=ark+"_"+str(page)+"_iiif.json"

print("---------------------------------------")
print("...processing: ", args.data)
print("...output in: ", out)

def create_annotation(id, body, target, label=None):
    annotation = {
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@id": id,
        "@type": "oa:Annotation",
        "motivation": "oa:describing",
        "resource": body,
        "on": f"https://gallica.bnf.fr/iiif/ark:/12148/{ark}/canvas/f{page}#xywh={target}",
    }
    return annotation

def write_annotations_to_file(annotations, filename):
    with open(filename, 'w') as f:
        f.write("{")
        f.write(f"\"https://gallica.bnf.fr/iiif/ark:/12148/{ark}/manifest.json\"")
        f.write(": {\n")
        f.write(f"\"https://gallica.bnf.fr/iiif/ark:/12148/{ark}/canvas/f{page}\"")
        f.write(": ")
        json.dump(annotations, f, indent=4)
        f.write("}}")

def create_annotations_from_file(filename):
    with open(filename, 'r') as f:
        data = json.load(f)

    annotations = []
    for prediction in data["predictions"]:
        id = prediction["detection_id"]
        x = prediction["x"]
        y = prediction["y"]
        width = prediction["width"]
        height = prediction["height"]
        label = prediction["class"]

        target = f"{x*ratio},{y*ratio},{width*ratio},{height*ratio}"

        body = [{
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": f"<p>{label}</p>"}]

        annotation = create_annotation(id, body, target, label)
        annotations.append(annotation)

    return annotations

# Example usage:
annotations = create_annotations_from_file(data)
write_annotations_to_file(annotations, out)
