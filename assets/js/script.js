/* Code to change active page (the page in which the user is in)*/

let navLinks = document.querySelectorAll('a.inner-link'); // this will select all the navlinks in the sidebar

navLinks.forEach((item) => {
   
    item.addEventListener('click', function() {
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active') // remove class active from current active class when clicked
        // the section related to that href
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active') // add class active to the element that is being clicked 
        document.querySelector('main > section.active').classList.remove('active') // remove active class to the current active section 
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active'); // get item's href attribute e.g "#about_me"
       
    })
    
})

/* Code to see if the sidebar menu is open or not*/

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){ // do some actions whenever the toggle button is clicked on
    document.querySelector('#sidebar').classList.toggle('open'); // get its class list and toggle it 
})

var options = {
    strings: ["Software Engineering student"],
    typeSpeed: 50,
    backSpeed: 25,
    
    
    };
    var typed = new Typed('.field h2', options);

    for (let i = 1; i <= 15; i++) {
        let meteor = document.createElement('span');
        meteor.classList = 'meteor';
        document.querySelector('#home .meteor-shower').append(meteor);
    }


 

const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {
  itemSelector: '.item',
  
});

const filterButtons = document.querySelectorAll('#my_work .filters button')
filterButtons.forEach((item) => {
    item.addEventListener('click', worFilter)
})

function workFilter () {
    console.log(filterButtons)
}
