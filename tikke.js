const translations1 = {
  en: {
    'c1': "PANEER TIKKA",
    'c2': "MALAI PANEER TIKKA",
    'c3': "HARYALI PANEER TIKKA",
    'c4': "AMRITSARI SOYA CHAAP",
    'c5': "MALAI SOYA CHAAP",
    'c6': "VEG KABAB",
    'c7': "WE DESI SPL PLATTER",
  },
  fr: {
    'c1': "PANEER TIKKA",
    'c2': "MALAI PANEER TIKKA",
    'c3': "HARYALI PANEER TIKKA",
    'c4': "AMRITSARI SOJA CHAAP",
    'c5': "MALAI SOJA CHAAP",
    'c6': "KABAB DE LÉGUMES",
    'c7': "PLATEAU WE DESI SPL",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  translatePage(savedLanguage);
  document.body.classList.toggle("fr-mode", savedLanguage === "fr");

  document.getElementById("btn-en").addEventListener("click", () => {
    setLanguage("en");
  });

  document.getElementById("btn-fr").addEventListener("click", () => {
    setLanguage("fr");
  });
});

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  translatePage(lang);
  document.body.classList.toggle("fr-mode", lang === "fr");
}

function translatePage(lang) {
  document.querySelector(".food-sweet__item.c1").innerText =
    translations1[lang].c1;
  document.querySelector(".food-sweet__item.c2").innerText =
    translations1[lang].c2;
  document.querySelector(".food-sweet__item.c3").innerText =
    translations1[lang].c3;
  document.querySelector(".food-sweet__item.c4").innerText =
    translations1[lang].c4;
  document.querySelector(".food-sweet__item.c5").innerText =
    translations1[lang].c5;
  document.querySelector(".food-sweet__item.c6").innerText =
    translations1[lang].c6;
  document.querySelector(".food-sweet__item.c7").innerText =
    translations1[lang].c7;
}
