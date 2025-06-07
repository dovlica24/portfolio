"use strict";

const lightTheme = document.getElementById('lightTheme');
const headerSection = document.getElementById('headerSec');
const navigationLinks = document.querySelectorAll('.nav-link');
const h1Tag = document.querySelector('h1');
// HAMBURGER MENU VARIABLES
const hamburgerMenuBars = document.querySelectorAll('.bar');
const mobileMenuLinks = document.querySelectorAll('.nav-link-mobile');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuClose = document.querySelector('.close-menu');
// MAIN VARIABLES
const mainSection = document.getElementById('mainSec');
const h2Tag = document.querySelectorAll('h2');
const jobDescription = document.querySelector('.job-description');
const aboutMeDesc = document.querySelector('.about-me-description');
const spanAbout = document.querySelectorAll('span');
// ABOUT ME SECTION
const aboutMeTextSec = document.getElementById('aboutMeTextSec');
// SKILLS SECTION
const h3Tag = document.querySelector('h3');
const skillList = document.querySelector('.my-skills');
// PROJECT SECTION
const projekatH3Tag = document.querySelectorAll('.naslov-sajta');
const screenshotH3Tag = document.querySelectorAll('.darkThemePromenaBoje');
const liveSiteButton = document.querySelectorAll('.live-web-site-button');
// CONTACT SECTION
const contactLinksSection = document.querySelectorAll('.contact-links');
const contactMeH3 = document.querySelector('.h3ContactMe');
const futer = document.getElementById('futerr');
// MOBILE MENU





lightTheme.addEventListener('click', ()=>{


lightTheme.classList.toggle('tamno-sunce');




    headerSection.classList.toggle('switchThemes');
    navigationLinks.forEach((linkk)=>{
         linkk.classList.toggle('switchLinksColor');
    });

headerSection.classList.toggle('switchFooterColor');

    h1Tag.classList.toggle('switchLinksColor');
    
    hamburgerMenuBars.forEach((barr)=>{
        barr.classList.toggle('switchBarsColor');
    });

    mobMenu.classList.toggle('switchMobileMenuBg');

    mobMenu.classList.toggle('switchFooterColor');

    mobMenuClose.classList.toggle('switchMobLinksColors')

    mobileMenuLinks.forEach((mobileLinkk)=>{
        mobileLinkk.classList.toggle('switchMobLinksColors');
    });

    mainSection.classList.toggle('switchThemes');

     document.body.classList.toggle('bodyBackground');

// h2Tag.classList.toggle('switchMobLinksColors');

h2Tag.forEach((h2tagg)=>{
    h2tagg.classList.toggle('switchMobLinksColors');
})

aboutMeDesc.classList.toggle('switchMobLinksColors');

spanAbout.forEach((spann)=>{
    spann.classList.toggle('switchSpan');
});

aboutMeTextSec.classList.toggle('switchMobLinksColors');

h3Tag.classList.toggle('switchMobLinksColors');

skillList.classList.toggle('switchMobLinksColors');

projekatH3Tag.forEach((nekiLinkh3)=>{
    nekiLinkh3.classList.toggle('switchMobLinksColors');
})


screenshotH3Tag.forEach((h3ScreenshotLink)=>{
    h3ScreenshotLink.classList.toggle('switchMobLinksColors');
})


liveSiteButton.forEach((buttonLink)=>{
    buttonLink.classList.toggle('switchButtonColor');
})


contactMeH3.classList.toggle('switchMobLinksColors');




contactLinksSection.forEach((kontaktLink)=>{
   kontaktLink.style.color = (kontaktLink.style.color === "var(--darkBlue3)") ? "white" : "var(--darkBlue3)";
});

futer.classList.toggle('switchFooterColor');

});





// HAMBURGER MENU





function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const menuIcon = document.querySelector(".menu-icon");


    menu.classList.toggle("show");
    menuIcon.classList.toggle("open");


// NOVI KOD

  if (menu.classList.contains("show")) {
        document.addEventListener("click", closeMenuOnClickOutside);
    } else {
        document.removeEventListener("click", closeMenuOnClickOutside);
    }


}

// NOVI KOD


function closeMenuOnClickOutside(event) {
    const menu = document.querySelector(".mobile-menu");
    const menuIcon = document.querySelector(".menu-icon");

    // If click is outside of menu and icon, close the menu
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("show");
        menuIcon.classList.remove("open");
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}





// Close the menu when clicking on any navigation link
document.querySelectorAll(".nav-link-mobile").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".mobile-menu");
        const menuIcon = document.querySelector(".menu-icon");

        menu.classList.remove("show");
        menuIcon.classList.remove("open");
    });
});


