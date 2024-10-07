// The locale
console.log("locale: ",myLocale);

const translations = {
  // English translations
  "en": {
    "title": "Digital collection history (full collection)",
    "subtitle": "Source: Gallica and Gallica SRU API (2024/01)",
    "li1": "OVERVIEW",
    "li2": "PROVENANCE",
    "li3": "PARTNERS",
    "li4": "PARTNERS MAP",
    "li10": "DATE and OCR",
    "li11": "PROGRAMS",
    "li12": "HISTORY"
  },
  "fr": {
    "title": "Historique de la numérisation (collection complète)",
    "subtitle": "Source : Gallica et API Gallica SRU (01/2024)",
    "li1": "SYNTHÈSE",
    "li3": "PARTENAIRES",
    "li4": "CARTE PART.",
    "li10": "DATE et OCR",
    "li11": "PROGRAMMES",
    "li12": "HISTORIQUE"

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
