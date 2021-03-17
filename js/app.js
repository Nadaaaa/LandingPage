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
/**
 * Define Global Variables
 *
 */
let arr = [
    "section1",
    "section2",
    "section3",
    "section4"
];


// build the nav
let unorderedList = document.getElementById('navbar__list');
for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = arr[i];
    let id_string = 'nav_sec' + ((i + 1).toString());
    listItem.id = id_string
    unorderedList.append(listItem)
    document.getElementById(id_string).classList.add('menu__link')
}
document.getElementById('nav_sec1').classList.add('active');


const sectionsLinks = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function removeAllActiveClasses() {
    sectionsLinks.forEach(item => {
        item.classList.remove('active');
    })
}

function addActiveClass(id) {
    let element
    if (id === 'section1') {
        element = document.getElementById('nav_sec1')
    }

    if (id === 'section2') {
        element = document.getElementById('nav_sec2')
    }

    if (id === 'section3') {
        element = document.getElementById('nav_sec3')
    }

    if (id === 'section4') {
        element = document.getElementById('nav_sec4')
    }
    element.classList.add("active")
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click

onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(item => {
        if (scrollPosition >= item.offsetTop - item.offsetHeight * 0.5 && scrollPosition <= item.offsetTop + item.offsetHeight * 0.5) {
            let currentId = item.id
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    })
}


// Set sections as active

sectionsLinks.forEach((item) => {
    item.addEventListener("click", () => {
        let section = document.getElementById(item.innerHTML)
        section.scrollIntoView({behavior: "smooth", block: "end"})
    })
})
