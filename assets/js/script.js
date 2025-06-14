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
    item.addEventListener('click', workFilter)
})

function workFilter () {

    const clickedButton = event.currentTarget;
    const clickedButtonGroup= clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active')
    activeButton.classList.remove('active');
    clickedButton.classList.add('active');
    shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))
const workElements = document.querySelectorAll("#my_work .work-items .wrap");
//workModal.show(); //must be removed after design done 
workElements.forEach((item) => {
    item.addEventListener('click', function (){
        
        document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'))
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title')
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description')
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client')
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed')
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills')
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'))
        workModal.show();
    })
})


var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event){
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event){
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})



let testimonialImages = document.querySelectorAll('#my_testimonial .images img');
testimonialImages.forEach((item, index) => {
    let position = index + 1;
    item.addEventListener('click', function () {
        document.querySelector('#my_testimonial .images img.active').classList.remove('active')
        // the old way => document.querySelector('#my_testimonial .images img:nth-child('+position+')').classList.add('active')
        document.querySelector(`#my_testimonial .images img:nth-child(${position})`).classList.add('active')


        document.querySelector('#my_testimonial .comments .item.active').classList.remove('active')
        document.querySelector(`#my_testimonial .comments .item:nth-child(${position})`).classList.add('active')
    })

})