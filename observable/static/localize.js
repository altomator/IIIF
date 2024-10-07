// The locale
console.log("locale: ",myLocale);

const translations = {
  // English translations
  "en": {
    "title": "Digital collection history (full collection)",
    "subtitle": "Source: Gallica and Gallica SRU API (2024/01)",
    "li1": "OVERVIEW",
    "li2": "PROVENANCE",
    "li3": "PARTNER",
    "li5": "DIGITISATION",
    "li51": "Programs",
    "li52": "History",
    "li61": "Type & prov.",
    "li71": "Antiquity",
    "li72": "Middle Ages",
    "li73": "Modern",
    "li74": "Contemporary",
    "li81": "Date & OCR"

  },
  "fr": {
    "title": "Historique de la numérisation (collection complète)",
    "subtitle": "Source : Gallica et API Gallica SRU (01/2024)",
    "li1": "SYNTHÈSE",
    "li2": "PROVENANCE",
    "li3": "PARTENAIRE",
    "li5": "NUMÉRISATION",
    "li51": "Programmes",
    "li52": "Historique",
    "li61": "Type et prov.",
    "li71": "Antiquité",
    "li72": "Moyen-Âge",
    "li73": "Moderne",
    "li74": "Contemporain",
    "li81": "Date et OCR"

  }
};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[localize-key]")
    .forEach(translateElement);
});

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("localize-key");
  const translation = translations[myLocale][key];
  if (translation) {
    element.innerText = translation;
  }
}
