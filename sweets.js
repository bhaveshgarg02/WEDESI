const translations = {
    en: {
        home: "HOME",
        aboutUs: "ABOUT US",
        gallery: "GALLERY",
        menu: "MENU",
        sweets: "SWEETS",
        contactUs: "CONTACT US",
        happymenu:"SWEETS",
        follow:"FOLLOW US",
        laddu: "LADDU",
        ladduDesc: "<span>$6/lb</span> <br> Laddu is a spherical sweet <br>from the Indian subcontinent<br> made of various ingredients <br>and sugar syrup or jaggery",
        rasgulla: "RASGULLA",
        rasgullaDesc: "<span>$7/lb</span> <br> Rasgulla is made from<br> ball shaped dumplings made<br> from paneer and cooked in <br> &nbsp light sugar syrup.",
        gulabJamun: "GULAB JAMUN",
        gulabJamunDesc: "<span>$7/lb</span> <br> Gulab Jamun are Fried milk <br>balls soaked in sweet <br>syrup, such as<br> rose syrup or honey.",
        petha: "PETHA",
        pethaDesc: "<span>$7/lb</span> <br> Petha is like a <br> firm white pumpkin<br>enriched with sugar,kitchen<br>lime , alum powder",
        gajrelaBarfi: "GAJRELA BARFI",
        gajrelaBarfiDesc: "<span>$8/lb</span> <br> Gajrela is a easy quick <br> tasty recipe made with<br>carrots,milk powder , ghee<br>sugar and cardamom.",
        peda: "PEDA",
        pedaDesc: "<span>$8/lb</span> <br>Creamy and rich peda is<br>a delightful sweet fudge<br>often found in indian shops<br>made with khoya , milk.",
        sandwich: "SANDWICH",
        sandwichDesc: "<span>$9/lb</span> <br>Sandwich are both sweet <br>and savory <br>like deli meat sandwich<br>or sweet peanut butter <br> and jelly",
        chamCham: "CHAM CHAM",
        chamChamDesc: "<span>$9/lb</span> <br> Cham Cham is made with <br> fresh chenna and<br>pressure cooked in thick <br>sugar syrup.",
        khoyaBarfi: "KHOYA BARFI",
        khoyaBarfiDesc: "<span>$10/lb</span> <br> Khoya Barfi is a <br> fudgy sweet made<br>with fresh condensed milk<br>toped with pistachios.",
        milkCake: "MILKCAKE",
        milkCakeDesc: "<span>$10/lb</span> <br> Milkcake is sweet made <br>of milk, sugar, ghee <br>and an acidic agent<br>such as lemon juice.",
        kalakand: "RASMALAI",
        kalakandDesc: "<span>$10/lb</span> <br> Rasmalai is a soft <br> and spongy cheese<br> balls soaked in chilled,<br>thickened, sweetened milk."
        
        
        // Add more translations as needed
    },
    fr: {
        home: "MAISON",
        aboutUs: "À PROPOS DE NOUS",
        gallery: "GALERIE",
        menu: "LA MENU",
        sweets: "BONBONS",
        contactUs: "CONTACTEZ-NOUS",
        happymenu:"BONBONS",
        follow:"SUIVEZ-NOUS",
        laddu: "LADDU",
        ladduDesc: "<span>$6/lb</span> <br> Laddu est un bonbon sphéri <br> que du sous-continent indien<br> fait de divers ingrédients <br>et de sirop de sucre ou de<br> &nbsp &nbsp &nbsp jaggery",
        rasgulla: "RASGULLA",
        rasgullaDesc: "<span>$7/lb</span> <br> Rasgulla est fait de<br> boulettes en forme de boule <br>faites de paneer et cuites dans <br> &nbsp du sirop de sucre léger.",
        gulabJamun: "GULAB JAMUN",
        gulabJamunDesc: "<span>$7/lb</span> <br> Gulab Jamun sont des<br> boules de lait frites <br>trempées dans un sirop <br>sucré, comme le<br> sirop de rose ou le miel.",
        petha: "PETHA",
        pethaDesc: "<span>$7/lb</span> <br> Petha est comme une <br> citrouille blanche ferme<br>enrichie de sucre, de lime de <br>cuisineet de poudre d'alun",
        gajrelaBarfi: "GAJRELA BARFI",
        gajrelaBarfiDesc: "<span>$8/lb</span> <br> Gajrela est une recette<br> rapide et facile <br> savoureuse faite avec<br>des carottes, de la poudre<br> de lait , du ghee du sucre<br> et de la cardamome.",
        peda: "PEDA",
        pedaDesc: "<span>$8/lb</span> <br>Crèmeux et riche, le peda est<br>un délicieux fudge sucré<br>souvent trouvé dans les<br> magasins indiens fait avec<br> du khoya , du lait.",
        sandwich: "SANDWICH",
        sandwichDesc: "<span>$9/lb</span> <br>Les sandwichs sont à la<br> fois sucrés et salés <br>comme le sandwich à <br> la charcuterie ou le beurre <br> de cacahuète sucré  et <br> la gelée",
        chamCham: "CHAM CHAM",
        chamChamDesc: "<span>$9/lb</span> <br> Cham Cham est fait avec <br> du chenna frais et<br>cuit sous pression dans un <br>épais sirop de sucre.",
        khoyaBarfi: "KHOYA BARFI",
        khoyaBarfiDesc: "<span>$10/lb</span> <br> Khoya Barfi est un bonbon <br> fudgy fait avec<br>du lait concentré frais<br>garni de pistaches.",
        milkCake: "MILKCAKE",
        milkCakeDesc: "<span>$10/lb</span> <br> Milkcake est un bonbon fait <br>de lait, sucre, ghee <br>et un agent acide<br>comme le jus de citron.",
        kalakand: "RASMALAI",
        kalakandDesc: "<span>$10/lb</span> <br> Le rasmalai est un fromage <br> à pâte molle et spongieuse<br> en boules trempées dans <br>du lait réfrigéré,<br> &nbsp épais et sucré."
    },
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
    document.querySelector(".happymenu").innerHTML = translations[lang].happymenu;
    document.querySelector(".follow").innerHTML = translations[lang].follow;
    document.querySelector('.food-sweet__title.laddu').innerHTML = translations[lang].laddu;
    document.querySelector('.cloud1.laddu').innerHTML = translations[lang].ladduDesc;

    document.querySelector('.food-sweet__title.rasgulla').innerHTML = translations[lang].rasgulla;
    document.querySelector('.cloud1.rasgulla').innerHTML = translations[lang].rasgullaDesc;

    document.querySelector('.food-sweet__title.gulab-jamun').innerHTML = translations[lang].gulabJamun;
    document.querySelector('.cloud1.gulab-jamun').innerHTML = translations[lang].gulabJamunDesc;

    document.querySelector('.food-sweet__title.petha').innerHTML = translations[lang].petha;
    document.querySelector('.cloud1.petha').innerHTML = translations[lang].pethaDesc;

    document.querySelector('.food-sweet__title.gajrela-barfi').innerHTML = translations[lang].gajrelaBarfi;
    document.querySelector('.cloud1.gajrela-barfi').innerHTML = translations[lang].gajrelaBarfiDesc;

    document.querySelector('.food-sweet__title.peda').innerHTML = translations[lang].peda;
    document.querySelector('.cloud1.peda').innerHTML = translations[lang].pedaDesc;

    document.querySelector('.food-sweet__title.sandwich').innerHTML = translations[lang].sandwich;
    document.querySelector('.cloud1.sandwich').innerHTML = translations[lang].sandwichDesc;

    document.querySelector('.food-sweet__title.cham-cham').innerHTML = translations[lang].chamCham;
    document.querySelector('.cloud1.cham-cham').innerHTML = translations[lang].chamChamDesc;

    document.querySelector('.food-sweet__title.khoya-barfi').innerHTML = translations[lang].khoyaBarfi;
    document.querySelector('.cloud1.khoya-barfi').innerHTML = translations[lang].khoyaBarfiDesc;

    document.querySelector('.food-sweet__title.milk-cake').innerHTML = translations[lang].milkCake;
    document.querySelector('.cloud1.milk-cake').innerHTML = translations[lang].milkCakeDesc;

    document.querySelector('.food-sweet__title.rasmalai').innerHTML = translations[lang].kalakand;
    document.querySelector('.cloud1.rasmalai').innerHTML = translations[lang].kalakandDesc;
}
    
    

    
    

