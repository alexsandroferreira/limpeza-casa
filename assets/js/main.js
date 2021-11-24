/************ SHOW MENU **************/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav-menu')

/************ remove-menu-mobile **************/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* link clicado com class active-link */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    if (linkColor) {
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))

/************ box-shadow no header **************/
function scrollHeader() {
    const scrollHeader = document.getElementById('header');
    if (this.scrollY >= 200) scrollHeader.classList.add('scroll-header');
    else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/************ mostrar o scrolltop **************/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


/************ cronograma da limpeza **************/
// variáveis 
const btn = document.getElementById('limpeza')
const date = moment().format('DD/MM/YYYY')
const week = moment().isoWeeks();
// constante que recebe a função anônima
const cleaning = () => {
    const one = document.getElementsByClassName("one")
    const dateNow = document.getElementById('dateNow')

    btn.addEventListener('click', function () {
        dateNow.textContent = date;
        if (week % 2 === 0) {
            one[0].textContent = "Alex"
            one[1].textContent = "Alex"
            one[2].textContent = "katy"
            one[3].textContent = "Katy"
        }
        one[0].textContent = "Katy"
        one[1].textContent = "Katy"
        one[2].textContent = "Alex"
        one[3].textContent = "Alex"
    })
}
cleaning()
