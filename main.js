const translations = {
  en: {
    home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US",
    mainh1: "Best in Montreal,QC",
    mainh3:
      "We Desi is the first Indian restaurant in Montreal to bring the Indian sweets <br> and authentic street foods from all over India under one roof !!",
    t1:"Meals Delivered",
    t2:"Happy Customers",
    t3:"Menu Items",
    t4:"Five Stars",
    heading:"FEATURED DELICACIES",
    subh1:"STREET CHAATS",
    subh2:"INDO CHINESE",
    subh3:"TIKKE SHIKKE",
    subh4:"SOUTH INDIAN",
      o1: "<br/><br/><br/>VIEW ITEMS  ",
      o2: "<br/><br/><br/>VIEW ITEMS ",
      o3: "<br/><br/><br/>VIEW ITEMS ",
      o4: "<br/><br/><br/>VIEW ITEMS ",
      heading1:"SWEETS",
      heading2:"They all love our food",
      bq1:"I had a pleasant dining experience at this sweets and veg restaurant!!",
      bq2:"It has quickly become one of my favorite places to dine.!!",
      bq3:"The sweets are also heavenly, with a wide range of traditional and innovative desserts",
      follow: "FOLLOW US",
      
    // Add ns as needed
  },
  fr: {
    home: "MAISON",
    aboutUs: "À PROPOS DE NOUS",
    gallery: "GALERIE",
    menu: "LA MENU",
    sweets: "BONBONS",
    contactUs: "CONTACTEZ-NOUS",
    mainh1: "Meilleur à Montréal,QC",
    mainh3:
      "We Desi est le premier restaurant indien à Montréal à regrouper sous un même toit les friandises indiennes et les plats de rue authentiques de toute l'Inde !!",
      t1:"Repas livrés",
      t2:"Clients satisfaits",
      t3:"Éléments de menu",
      t4:"Cinq étoiles",
      heading:"DELICATS EN VEDETTE",
      subh1:"CHATS DE RUE",
      subh2:"INDO CHINOIS",
      subh3:"TIKKE SHIKKÉ",
      subh4:"INDIEN DU SUD",
      o1: "<br/><br/><br/>VOIR ARTICLES",
      o2: "<br/><br/><br/>VOIR ARTICLES",
      o3: "<br/><br/><br/>VOIR ARTICLES",
      o4: "<br/><br/><br/>VOIR ARTICLES",
      heading1:"BONBONS",
      heading2:"Ils aiment tous notre nourriture",
      bq1:"J'ai eu une expérience culinaire agréable dans ce restaurant de friandises et de légumes !!",
      bq2:"C'est rapidement devenu l'un de mes endroits préférés pour dîner. !! ",
      bq3:"Les douceurs sont également paradisiaques, avec une large gamme de desserts traditionnels et innovants",
      follow:"SUIVEZ-NOUS"


    
  },
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    translatePage(savedLanguage);
    document.body.classList.toggle('fr-mode', savedLanguage === 'fr');

    document.getElementById('btn-en').addEventListener('click', () => {
        setLanguage('en');
        document.body.classList.toggle('fr-mode', savedLanguage === 'fr');
    });

    document.getElementById('btn-fr').addEventListener('click', () => {
        setLanguage('fr');
    });
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage(lang);
    location.reload();
    document.body.classList.toggle('fr-mode', lang === 'fr');
}

function translatePage(lang) {
    document.querySelector('.home-button').innerText = translations[lang].home;
    document.querySelector('.aboutus-button').innerText = translations[lang].aboutUs;
    document.querySelector('.gallery-button').innerText = translations[lang].gallery;
    document.querySelector('.menu-button').innerText = translations[lang].menu;
    document.querySelector('.sweets-button').innerText = translations[lang].sweets;
    document.querySelector('.contactus-button').innerText = translations[lang].contactUs;
  document.querySelector(".mainh1").innerText = translations[lang].mainh1;
  document.querySelector(".mainh3").innerHTML = translations[lang].mainh3;
  document.querySelector(".t1").innerText = translations[lang].t1;
  document.querySelector(".t2").innerText = translations[lang].t2;
  document.querySelector(".t3").innerText = translations[lang].t3;
  document.querySelector(".t4").innerText = translations[lang].t4;
  document.querySelector(".heading").innerText = translations[lang].heading;
  document.querySelector(".subh1").innerText = translations[lang].subh1;
  document.querySelector(".subh2").innerText = translations[lang].subh2;
  document.querySelector(".subh3").innerText = translations[lang].subh3;
  document.querySelector(".subh4").innerText = translations[lang].subh4;
  document.querySelector(".o1").innerHTML = translations[lang].o1;
  document.querySelector(".o2").innerHTML = translations[lang].o2;
  document.querySelector(".o3").innerHTML = translations[lang].o3;
  document.querySelector(".o4").innerHTML = translations[lang].o4;
  document.querySelector(".heading1").innerText = translations[lang].heading1;
  document.querySelector(".heading2").innerText = translations[lang].heading2;
  document.querySelector(".bq1").innerHTML = translations[lang].bq1;
  document.querySelector(".bq2").innerHTML = translations[lang].bq2;
  document.querySelector(".bq3").innerHTML = translations[lang].bq3;
  document.querySelector(".follow").innerHTML = translations[lang].follow;
  
  
}
