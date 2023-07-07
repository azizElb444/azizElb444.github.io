// ========================DARK THEME=======================
const themeButton = document.getElementById('theme-button')
const darkTheme= 'dark-theme'
const iconTheme ='uil-sun'

// previously selected topic 

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtaining the current theme 

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// validating if the user has previously choosing a topic

if (selectedTheme) {
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// activate/deactivate the theme

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})

//=========MENU SHOW/HiDDEN==========

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ========MENU SHOW =============

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
//==============MENU CLOSE==============
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ===================REMOVE MENU ========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when clicked on nav links , the menu will be removed

    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

//====================Typewriter effects=========================

new Typewriter('#typewriter', {
  strings: ['Aziz Elbelaychy'],
  autoStart: true,
  loop:true,
  cursor:"|"
});

//===========================Projects Swiper=========================

var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: 'fade',
      loop : true,
      mousewheel : {
            invert:false,
      },
     // navigation: {
       // nextEl: ".swiper-button-next",
       // prevEl: ".swiper-button-prev",
     // },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
      //mousewheel: true,
     });



//=============================GOING UP======================================

function scrollUp() {
    const scrollup =document.getElementById('scroll-up');
    //when scrolling has exceeded 560px in height , the arrow-up icon shows up
    if (this.scrollY >=560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll',scrollUp);

//=========================SCROLL sections highlight==============================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 ;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })

}
window.addEventListener('scroll',scrollActive);

//===================EMAIL SEND==========================

        function sendEmail() {
            Email.send({
            SecureToken : "37ce2593-bae5-4ad7-93ee-d42d3875864e",
            To : 'azizelbelaychy@gmail.com',
            From : document.getElementById("email").value,
            Subject : "Subject :" + document.getElementById("subject").value,
            Body : "Name : " + document.getElementById("name").value 
                + "<br> Message : " + document.getElementById("message").value
            }).then(
            message => alert("message has been sent succesfully!")
            );
        }

