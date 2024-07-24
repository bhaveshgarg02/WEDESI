const translations = {
    en: {
        home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US",
        ourResto: "OUR RESTO",
        weDesiText: "WeDesi is here to add happiness to your lives by providing you the most delish Indian Sweets and everyone’s favorite Indian Street food. Wedesi is the first Indian restaurant in Montreal to bring the Indian sweets and authentic street foods from all over India under one roof. If you want to celebrate happiness or take a stroll through Indian streets, you have come to the right place. Our diverse menu will introduce you to all regions of India with our authentic flavours and spices. WeDesi is looking forward to be part of your celebrations and special occasions and creating moments filled with happiness with your loved ones.",
        weDesiText1: "Our diverse menu will introduce you to all regions of India with our authentic flavors and spices. WeDesi is looking forward to be part of your celebrations and special occasions and creating moments filled with happiness with your loved ones.",
        weDesiTextcore: "The place where customers would come to enjoy the authentic street food but most importantly take some happiness(sweets) back home in a box!!",
        weDesiText3: "A teenager coming to a new country was no easy task. Singh started his career in the food industry from the beginning and ploughed through all the challenges he faced. After years of learning and working hard he decided to open his own place and built a successful restaurant. With 10 years of experience of running his own restaurant he finally decided it was about time to tackle yet another challenge and achieve his goal of opening an Indian Sweets place. He has always wanted to build a place where customers would come to enjoy the authentic street food but most importantly take some happiness(sweets) back home in a box!.",
        weDesiText4: "Our diverse menu will introduce you to all regions of India with our authentic flavors and spices. WeDesi is looking forward to be part of your celebrations and special occasions and creating moments filled with happiness with your loved ones.",
        foodPolicy: "Our Food Policy",
        coreValues: "Our Core Values",
        fewWords: "A FEW WORDS ABOUT US",
        lakhvirSingh: "LAKHVIR SINGH",
        renownedChefs: "Our Renowned Chefs",
        meetTasteExperts: "Meet the Taste Experts",
        careers: "Careers",
        joinUs: "Be a Part of our Restaurant",
        follow: "FOLLOW US"
    },
    fr: {
        home: "MAISON",
        aboutUs: "À PROPOS DE NOUS",
        gallery: "GALERIE",
        menu: "LA MENU",
        sweets: "BONBONS",
        contactUs: "CONTACTEZ-NOUS",
        ourResto: "NOTRE RESTO",
        weDesiText: "WeDesi est là pour ajouter du bonheur à votre vie en vous fournissant les plus délicieux bonbons indiens et la cuisine de rue indienne préférée de tous. Wedesi est le premier restaurant indien à Montréal à proposer des bonbons indiens et des plats de rue authentiques de toute l'Inde sous un même toit. Si vous voulez célébrer le bonheur ou vous promener dans les rues indiennes, vous êtes au bon endroit. Notre menu diversifié vous présentera toutes les régions de l'Inde avec nos saveurs et épices authentiques. WeDesi se réjouit de faire partie de vos célébrations et occasions spéciales et de créer des moments remplis de bonheur avec vos proches.",
        weDesiText1: "Notre menu diversifié vous fera découvrir toutes les régions de l'Inde avec nos saveurs et épices authentiques. WeDesi a hâte de participer à vos célébrations et occasions spéciales et de créer des moments remplis de bonheur avec vos proches.",
        weDesiTextcore: "L'endroit où les clients venaient profiter de la cuisine de rue authentique mais surtout ramener du bonheur (des bonbons) chez eux dans une boîte !!",
        weDesiText3: "Un adolescent arrivant dans un nouveau pays n’était pas une tâche facile. Singh a commencé sa carrière dans l'industrie alimentaire dès le début et a relevé tous les défis auxquels il a été confronté. Après des années d'apprentissage et de travail acharné, il a décidé d'ouvrir son propre restaurant et de construire un restaurant à succès. Avec 10 ans d'expérience dans la gestion de son propre restaurant, il a finalement décidé qu'il était temps de relever un autre défi et d'atteindre son objectif d'ouvrir un restaurant Indian Sweets. Il a toujours voulu construire un endroit où les clients viendraient profiter de la cuisine de rue authentique mais surtout ramener du bonheur (des bonbons) chez eux dans une boîte !.",
        weDesiText4: "Notre menu diversifié vous fera découvrir toutes les régions de l'Inde avec nos saveurs et épices authentiques. WeDesi a hâte de participer à vos célébrations et occasions spéciales et de créer des moments remplis de bonheur avec vos proches.",
        foodPolicy: "Notre Politique Alimentaire",
        coreValues: "Nos Valeurs Fondamentales",
        fewWords: "QUELQUES MOTS SUR NOUS",
        lakhvirSingh: "LAKHVIR SINGH",
        renownedChefs: "Nos Chefs Renommés",
        meetTasteExperts: "Rencontrez les Experts du Goût",
        careers: "Carrières",
        joinUs: "Faites partie de notre restaurant",
        follow: "SUIVEZ-NOUS"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    translatePage(savedLanguage);
    document.body.classList.toggle('fr-mode', savedLanguage === 'fr');
    
    document.getElementById('btn-en').addEventListener('click', () => {
        setLanguage('en');
        location.reload();
        

    });

    document.getElementById('btn-fr').addEventListener('click', () => {
        setLanguage('fr');
    });
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage(lang);
    document.body.classList.toggle('fr-mode', lang === 'fr');
    location.reload(); // Reload the page to apply changes
}

function translatePage(lang) {
    document.querySelector('.home-button').innerText = translations[lang].home;
    document.querySelector('.aboutus-button').innerText = translations[lang].aboutUs;
    document.querySelector('.gallery-button').innerText = translations[lang].gallery;
    document.querySelector('.menu-button').innerText = translations[lang].menu;
    document.querySelector('.sweets-button').innerText = translations[lang].sweets;
    document.querySelector('.contactus-button').innerText = translations[lang].contactUs;

    document.querySelector('.u-text-1').innerText = translations[lang].aboutUs;
    document.querySelector('.u-text-2').innerText = translations[lang].ourResto;
    document.querySelector('.u-text-3').innerText = translations[lang].weDesiText;
    document.querySelector('.u-text-4').innerText = translations[lang].foodPolicy;
    document.querySelector('.u-text-5').innerText = translations[lang].weDesiText1;
    document.querySelector('.u-text-6').innerText = translations[lang].coreValues;
    document.querySelector('.u-text-7').innerText = translations[lang].weDesiTextcore;
    document.querySelector('.u-text-8').innerText = translations[lang].fewWords;
    document.querySelector('.u-text-9').innerText = translations[lang].lakhvirSingh;
    document.querySelector('.u-text-10').innerText = translations[lang].weDesiText3;
    document.querySelector('.u-text-11').innerText = translations[lang].renownedChefs;
    document.querySelector('.u-text-12').innerText = translations[lang].meetTasteExperts;
    document.querySelector('.u-text-13').innerText = translations[lang].weDesiText4;
    document.querySelector('.u-text-14').innerText = translations[lang].careers;
    document.querySelector('.u-text-15').innerText = translations[lang].joinUs;
    document.querySelector(".follow").innerHTML = translations[lang].follow;
}
