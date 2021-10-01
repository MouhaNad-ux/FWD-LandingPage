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
const navigation = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));    // creating a dynamic  Array for the sections

let numberOfItms= sections.length;
const mybutton = document.getElementById("myBtn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// function to show the top button when the page is scrolled down
const  scrolDw = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display =  "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const itemsCreate =  () => {     // a function to add the sections from the index html to the dynamic array
     let listItem = '';
    sections.forEach(section =>{
      const  DataNav = section.dataset.nav;
      const  Name = section.id;

        listItem += `<li><a class="menu__link" href="#${Name}">${DataNav}</a></li>`;

        
    });
    navigation.innerHTML=listItem;
    scrolDw();
}



const  sectionViewPort =  (arg) => {
    let pos = arg.getBoundingClientRect();
    return (pos.top >= 0);
}
// function  active section upon scroll using the pre-implemented starter code section active styles
const activeSection = () => {
    sections.forEach(section => {
       if (sectionViewPort(section)) {

        if(!section.classList.contains('your-active-class')){
            section.classList.add('your-active-class');
        }
       }

    });
}
// function to Hide fixed navigation bar while not scrolling
const hideNav =() =>{
    document.getElementById('navbar__list').style.display = "block";
    setTimeout(function(){document.getElementById('navbar__list').style.display = "none";},1000);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
itemsCreate();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', activeSection); // specifies active section upon scroll
document.addEventListener('scroll', hideNav); // hides active section upon scroll
mybutton.addEventListener('click',topFunction); // event listner to clicks on the scroll to the top button
document.addEventListener('scroll',scrolDw);// event listner to scrolls  to show  the top button
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
activeSection();



