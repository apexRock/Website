const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar-menu')
const navlogo = document.querySelector('#navbar-logo')
const body = document.querySelector('body')

const mobilemenu = ()=>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
}


menu.addEventListener('click',mobilemenu)