document.addEventListener('DOMContentLoaded', () => {
    const translations = {
      en: {
        s1: "CHATPATTA CHAAT",
        s2: "TIKKE SHIKKE ",
        s3: "BURGER AND ROLLS ",
        s4: "INDO CHINESE ",
        s5: "SOUTH INDIAN ",
        s6: "DESI CURRIES ",
        s7: "PARATHA AND NAAN ",
        s8: "WE DESI COMBO ",
        s9: "RICE  ",
        s10: "DRINKS ",
        s11: "DESSERTS  ",
        s12: "KIDS SPECIAL ",
        s13: "SIDES ",
        view: "VIEW ALL",
        o1: "<br/><br/><br/>VIEW ITEMS  ",
        o2: "<br/><br/><br/>VIEW ITEMS ",
        o3: "<br/><br/><br/>VIEW ITEMS ",
        o4: "<br/><br/><br/>VIEW ITEMS ",
        o5: "<br/><br/><br/>VIEW ITEMS ",
        o6: "<br/><br/><br/>VIEW ITEMS ",
        o7: "<br/><br/><br/>VIEW ITEMS ",
        o8: "<br/><br/><br/>VIEW ITEMS ",
        o9: "<br/><br/><br/>VIEW ITEMS ",
        o10: "<br/><br/><br/>VIEW ITEMS ",
        o11: "<br/><br/><br/>VIEW ITEMS ",
        o12: "<br/><br/><br/>VIEW ITEMS ",
        o13: "<br/><br/><br/>VIEW ITEMS ",
        menu11: "MENU",
        happymenu1: "WEDESI-MENU",
        t1: "CHATPATA CHAATS  ",
        t2: "TIKKE SHIKKE ",
        t3: "BURGER AND ROLLS ",
        t4: "INDO CHINESE ",
        t5: "SOUTH INDIAN ",
        t6: "DESI CURRIES ",
        t7: "PARATHA AND NAAN ",
        t8: "WE DESI COMBO ",
        t9: "RICE  ",
        t10: "DRINKS ",
        t11: "DESSERTS  ",
        t12: "KIDS SPECIAL ",
        t13: "SIDES ",
        follow: "FOLLOW US",
        home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US"
      },
      fr: {
        s1: "chat épicé ",
        s2: "TIC SHIKKÉ ",
        s3: "BURGER ET ROULEAUX ",
        s4: "INDO CHINOIS",
        s5: "INDIEN DU SUD ",
        s6: "CURRIES DESI",
        s7: "PARATHA ET NAAN",
        s8: "NOUS DESI COMBO",
        s9: "RIZ",
        s10: "BOISSONS",
        s11: "LE DESSERTS",
        s12: "SPÉCIAL ENFANTS ",
        s13: "CÔTÉS",
        view: "VOIR TOUT",
        menu11: "LA MENU",
        happymenu1: "WEDESI-LA MENU",
        o1: "<br/><br/><br/>VOIR ARTICLES",
        o2: "<br/><br/><br/>VOIR ARTICLES",
        o3: "<br/><br/><br/>VOIR ARTICLES",
        o4: "<br/><br/><br/>VOIR ARTICLES",
        o5: "<br/><br/><br/>VOIR ARTICLES",
        o6: "<br/><br/><br/>VOIR ARTICLES",
        o7: "<br/><br/><br/>VOIR ARTICLES",
        o8: "<br/><br/><br/>VOIR ARTICLES",
        o9: "<br/><br/><br/>VOIR ARTICLES",
        o10: "<br/><br/><br/>VOIR ARTICLES",
        o11: "<br/><br/><br/>VOIR ARTICLES",
        o12: "<br/><br/><br/>VOIR ARTICLES",
        o13: "<br/><br/><br/>VOIR ARTICLES",
        t1: "chat épicé  ",
        t2: "TIC SHIKKÉ ",
        t3: "BURGER ET ROULEAUX",
        t4: "INDO CHINOIS",
        t5: "INDIEN DU SUD ",
        t6: "CURRIES DESI",
        t7: "PARATHA ET NAAN",
        t8: "NOUS DESI COMBO",
        t9: "RIZ",
        t10: "BOISSONS",
        t11: "LE DESSERTS",
        t12: "SPÉCIAL ENFANTS ",
        t13: "CÔTÉS",
        follow: "SUIVEZ-NOUS",
        home: "MAISON",
        aboutUs: "À PROPOS DE NOUS",
        gallery: "GALERIE",
        menu: "LA MENU",
        sweets: "BONBONS",
        contactUs: "CONTACTEZ-NOUS"
      }
    };
  
    function updateText(lang) {
      // Update navigation bar
      document.querySelector('.home-button').innerText = translations[lang].home;
      document.querySelector('.aboutus-button').innerText = translations[lang].aboutUs;
      document.querySelector('.gallery-button').innerText = translations[lang].gallery;
      document.querySelector('.menu-button').innerText = translations[lang].menu;
      document.querySelector('.sweets-button').innerText = translations[lang].sweets;
      document.querySelector('.contactus-button').innerText = translations[lang].contactUs;
  
      // Update page content
      document.querySelector(".view").innerHTML = translations[lang].view;
      document.querySelector(".happymenu1").innerHTML = translations[lang].happymenu1;
      document.querySelector(".menu11").innerHTML = translations[lang].menu11;
      document.querySelector(".s1").innerHTML = translations[lang].s1;
      document.querySelector(".t1").innerHTML = translations[lang].t1;
      document.querySelector(".s2").innerHTML = translations[lang].s2;
      document.querySelector(".t2").innerHTML = translations[lang].t2;
      document.querySelector(".s3").innerHTML = translations[lang].s3;
      document.querySelector(".t3").innerHTML = translations[lang].t3;
      document.querySelector(".s4").innerHTML = translations[lang].s4;
      document.querySelector(".t4").innerHTML = translations[lang].t4;
      document.querySelector(".s5").innerHTML = translations[lang].s5;
      document.querySelector(".t5").innerHTML = translations[lang].t5;
      document.querySelector(".s6").innerHTML = translations[lang].s6;
      document.querySelector(".t6").innerHTML = translations[lang].t6;
      document.querySelector(".s7").innerHTML = translations[lang].s7;
      document.querySelector(".t7").innerHTML = translations[lang].t7;
      document.querySelector(".s8").innerHTML = translations[lang].s8;
      document.querySelector(".t8").innerHTML = translations[lang].t8;
      document.querySelector(".s9").innerHTML = translations[lang].s9;
      document.querySelector(".t9").innerHTML = translations[lang].t9;
      document.querySelector(".s10").innerHTML = translations[lang].s10;
      document.querySelector(".t10").innerHTML = translations[lang].t10;
      document.querySelector(".s11").innerHTML = translations[lang].s11;
      document.querySelector(".t11").innerHTML = translations[lang].t11;
      document.querySelector(".s12").innerHTML = translations[lang].s12;
      document.querySelector(".t12").innerHTML = translations[lang].t12;
      document.querySelector(".s13").innerHTML = translations[lang].s13;
      document.querySelector(".t13").innerHTML = translations[lang].t13;
      document.querySelector(".o1").innerHTML = translations[lang].o1;
      document.querySelector(".o2").innerHTML = translations[lang].o2;
      document.querySelector(".o3").innerHTML = translations[lang].o3;
      document.querySelector(".o4").innerHTML = translations[lang].o4;
      document.querySelector(".o5").innerHTML = translations[lang].o5;
      document.querySelector(".o6").innerHTML = translations[lang].o6;
      document.querySelector(".o7").innerHTML = translations[lang].o7;
      document.querySelector(".o8").innerHTML = translations[lang].o8;
      document.querySelector(".o9").innerHTML = translations[lang].o9;
      document.querySelector(".o10").innerHTML = translations[lang].o10;
      document.querySelector(".o11").innerHTML = translations[lang].o11;
      document.querySelector(".o12").innerHTML = translations[lang].o12;
      document.querySelector(".o13").innerHTML = translations[lang].o13;
      document.querySelector(".follow").innerHTML = translations[lang].follow;
    }
  
    function setLanguage(lang) {
      localStorage.setItem('language', lang);
      updateText(lang);
    }
  
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateText(savedLanguage);
    document.body.classList.toggle('fr-mode', savedLanguage === 'fr');
  
    document.getElementById("btn-en").addEventListener("click", () => {
      setLanguage('en');
      location.reload(); // Reload the page to apply changes
    });
  
    document.getElementById("btn-fr").addEventListener("click", () => {
      setLanguage('fr');
      location.reload(); // Reload the page to apply changes
    });
  });
  