/* Code to change active page (the page in which the user is in)*/

let navLinks = document.querySelectorAll('nav ul li a'); // this will select all the navlinks in the sidebar

navLinks.forEach((item) => {
   
    item.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active') // remove class active from current active class when clicked
        item.classList.add('active') // add class active to the element that is being clicked 
        document.querySelector('main > section.active').classList.remove('active') // remove active class to the current active section 
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active'); // get item's href attribute e.g "#about_me"
       
    })
    
})

/* Code to see if the sidebar menu is open or not*/

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){ // do some actions whenever the toggle button is clicked on
    document.querySelector('#sidebar').classList.toggle('open'); // get its class list and toggle it 
})