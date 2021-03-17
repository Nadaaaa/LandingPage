/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/* Define Global Variables */
const SectionsStringArray = [
    "section1",
    "section2",
    "section3",
    "section4"
];
/* End Global Variables*/


// build the nav
buildNavigation();

const sectionsLinks = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll('section');




/* Start Helper Functions */

function removeAllActiveClasses() {
    sectionsLinks.forEach(item => {
        item.classList.remove('active');
    })
    sections.forEach(item => {
        item.classList.remove('your-active-class');
    })
}

function addActiveClass(id) {
    let element
    if (id === 'section1') {
        element = document.getElementById('nav_sec1');
    }

    if (id === 'section2') {
        element = document.getElementById('nav_sec2');
    }

    if (id === 'section3') {
        element = document.getElementById('nav_sec3');
    }

    if (id === 'section4') {
        element = document.getElementById('nav_sec4');
    }
    element.classList.add("active");
    document.getElementById(id).classList.add("your-active-class");
}
/* End Helper Functions */



/* Begin Main Functions */

// Build the navigation
function buildNavigation(){
    let unorderedList = document.getElementById('navbar__list');
    for (let i = 0; i < SectionsStringArray.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = SectionsStringArray[i];
        let id_string = 'nav_sec' + ((i + 1).toString());
        listItem.id = id_string;
        unorderedList.append(listItem);
        document.getElementById(id_string).classList.add('menu__link');
    }
    document.getElementById('nav_sec1').classList.add('active');
}

// Add class 'active' to section when near top of viewport
function setActiveSection(section){
    let sectionPosition = document.getElementById(section.id).getBoundingClientRect();

    if (sectionPosition.top < 300) {
        let currentId = section.id;
        removeAllActiveClasses();
        addActiveClass(currentId);
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(section){
    document.getElementById(section).scrollIntoView({behavior: "smooth"});
}
/* End Main Functions */


/* Begin Events */

// Scroll to section on link click
sectionsLinks.forEach((sectionLink) => {
    sectionLink.addEventListener("click", () => {
        scrollToSection(sectionLink.innerHTML);
    })
})

// Set sections as active
onscroll = function () {
    sections.forEach(section => {
        setActiveSection(section)
    })
}
/* End Events */




