const translations = {
    en: {
        home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US",
        reserveTitle: "Reserve a Table",
        contactTitle: "Contact Us",
        contactDesc: "Wedesi is the first Indian restaurant in Montreal to bring the Indian sweets<br> and authentic street foods from all over India under one roof.",
        reservationTitle: "Are you hungry?",
        reservationDesc: "Come dine with us",
        reservationDetail: "Our diverse menu will introduce you to all regions of India with our authentic flavours and spices.",
        restaurantDining: "For Restaurant Dining",
        feedback: "Feedback",
        happiness: "Where customers would come to enjoy the authentic street food but most importantly take some happiness(sweets) back home in a box!!",
        openHoursTitle: "Open Hours",
        openHours: "Tues-Sun 11 am - 10 pm",
        followUs: "FOLLOW US",
        fullName: "Full Name*",
        email: "Email*",
        phoneNumber: "Phone Number*",
        message: "Message*",
        sendMessage: "Send Message"
    },
    fr: {
        home: "MAISON",
        aboutUs: "À PROPOS DE NOUS",
        gallery: "GALERIE",
        menu: "LA MENU",
        sweets: "BONBONS",
        contactUs: "CONTACTEZ-NOUS",
        reserveTitle: "Réservez une table",
        contactTitle: "Contactez-nous",
        contactDesc: "Wedesi est le premier restaurant indien à Montréal à apporter les sucreries indiennes et les plats de rue authentiques de toute l'Inde sous un même toit.",
        reservationTitle: "Vous avez faim?",
        reservationDesc: "Venez dîner avec nous",
        reservationDetail: "Notre menu diversifié vous fera découvrir toutes les régions <br> de l'Inde avec nos saveurs et épices authentiques.",
        restaurantDining: "Pour le dîner au restaurant",
        feedback: "Retour d'information",
        happiness: "Où les clients viennent profiter de la nourriture de rue authentique mais <br> surtout emporter un peu de bonheur (bonbons) chez eux dans une boîte!!",
        openHoursTitle: "Heures d'ouverture",
        openHours: "Mar-Dim 11 h - 22 h",
        followUs: "SUIVEZ-NOUS",
        fullName: "Nom complet*",
        email: "Email*",
        phoneNumber: "Numéro de téléphone*",
        message: "Message*",
        sendMessage: "Envoyer le message"
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
    document.querySelector('.o1').innerText = translations[lang].reserveTitle;
    document.querySelector('.o2').innerText = translations[lang].contactTitle;
    document.querySelector('.o3').innerHTML = translations[lang].contactDesc;
    document.querySelector('.reservation h2').innerText = translations[lang].reservationTitle;
    document.querySelector('.reservation h4').innerText = translations[lang].reservationDesc;
    document.querySelector('.reservation h5').innerHTML = translations[lang].reservationDetail;
    document.querySelector('.reservation h1').innerText = translations[lang].restaurantDining;
    document.querySelector('.contactus').innerText = translations[lang].feedback;
    document.querySelector('.happiness').innerHTML = translations[lang].happiness;
    document.querySelector('section2 h1').innerText = translations[lang].openHoursTitle;
    document.querySelector('section2 h5').innerText = translations[lang].openHours;
    document.querySelector('.follow').innerText = translations[lang].followUs;
    document.querySelector('label.fname').innerText = translations[lang].fullName;
    document.querySelector('label.email').innerText = translations[lang].email;
    document.querySelector('label.number').innerText = translations[lang].phoneNumber;
    document.querySelector('label.message').innerText = translations[lang].message;
    document.querySelector('.submit').innerText = translations[lang].sendMessage;
}
