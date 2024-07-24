const translations = {
    en: {
        home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US",
        follow: "FOLLOW US"
    },
    fr: {
        home: "MAISON",
        aboutUs: "À PROPOS DE NOUS",
        gallery: "GALERIE",
        menu: "LA MENU",
        sweets: "BONBONS",
        contactUs: "CONTACTEZ-NOUS",
        follow: "SUIVEZ-NOUS"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    translatePage(savedLanguage);
    document.body.classList.toggle('fr-mode', savedLanguage === 'fr');
    
    document.getElementById('btn-en').addEventListener('click', () => {
        setLanguage('en');
    });

    document.getElementById('btn-fr').addEventListener('click', () => {
        setLanguage('fr');
    });
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage(lang);
    document.body.classList.toggle('fr-mode', lang === 'fr');
}

function translatePage(lang) {
    document.querySelector('.home-button').innerText = translations[lang].home;
    document.querySelector('.aboutus-button').innerText = translations[lang].aboutUs;
    document.querySelector('.gallery-button').innerText = translations[lang].gallery;
    document.querySelector('.menu-button').innerText = translations[lang].menu;
    document.querySelector('.sweets-button').innerText = translations[lang].sweets;
    document.querySelector('.contactus-button').innerText = translations[lang].contactUs;
    document.querySelector('.happymenu').innerText = translations[lang].gallery;
    document.querySelector(".follow").innerHTML = translations[lang].follow;
}
