/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== VALIDAR SI EXISTE LA CONSTANTE ===============*/
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add( 'show-menu' )
    })
}

/*=============== MENU OCULTO ===============*/
/*=============== VALIDAR SI LA CONSTANTE EXISTE ===============*/
if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener ('click', linkAction))


/*=============== CAMBIAR BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Cuando el Scorll es mas grande que 50vw height , agrega el scroll-header al tag
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll' , scrollHeader)


/*=============== MOSTRAR SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // Cuando el Scroll es mayor que 350vw de altura , agregar el 'show-scroll' tag en la clase scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute ('id')
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== TEMA DARK LIGHT ===============*/ 
const themeButton = document.getElementById('theme-button')

const darkTheme = 'dark-theme'

const iconTheme = 'ri-sun-line'

/* Tema previamente seleccionado (si el usuario selecciona)*/ 

const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

/* Obtenemos el tema actual que tiene la interfaz validando la clase de tema oscuro*/

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme) 
}

/* activar/desactivar el tema manualmente con un boton*/

themeButton.addEventListener('click', () =>  {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo,
           .footer__description, .footer__content`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`,{origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})
sr.reveal(`.piezas__card`, {interval: 100})

