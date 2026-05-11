/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== TYPING ANIMATION ====================*/
const typingEl = document.getElementById('typing-text')
const typingTitles = ['Technology Lead', 'Data Engineer', 'Cloud Architect']
let titleIndex = 0, charIndex = 0, isDeleting = false

function typeLoop() {
    const current = typingTitles[titleIndex]

    if (!isDeleting) {
        typingEl.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
            isDeleting = true
            setTimeout(typeLoop, 1800)
            return
        }
    } else {
        typingEl.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
            isDeleting = false
            titleIndex = (titleIndex + 1) % typingTitles.length
        }
    }
    setTimeout(typeLoop, isDeleting ? 60 : 100)
}

if (typingEl) typeLoop()

/*==================== EXPERIENCE EXPAND / COLLAPSE ====================*/
const experienceCards = document.querySelectorAll('.experience__card[data-expandable]')

experienceCards.forEach(card => {
    const toggleBtn = card.querySelector('.experience__toggle')
    if (!toggleBtn) return

    toggleBtn.addEventListener('click', () => {
        const isExpanded = card.classList.toggle('experience__expanded')
        toggleBtn.querySelector('.toggle-text').textContent = isExpanded ? 'Show less' : 'Show more'
        toggleBtn.querySelector('i').style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
    })
})

/*==================== PROJECT FILTER ====================*/
const filterBtns = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project__card')

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')

        const filter = btn.getAttribute('data-filter')

        projectCards.forEach(card => {
            const match = filter === 'all' || card.getAttribute('data-category') === filter
            card.classList.toggle('project__hidden', !match)
        })
    })
})

/*==================== LIGHT / DARK THEME TOGGLE ====================*/
const themeToggle = document.getElementById('theme-toggle')
const themeIcon = document.getElementById('theme-icon')
const THEME_KEY = 'portfolio-theme'

function applyTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light')
    themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
}

// Restore saved preference
const savedTheme = localStorage.getItem(THEME_KEY) || 'dark'
applyTheme(savedTheme)

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.body.classList.contains('light-theme') ? 'light' : 'dark'
        const next = current === 'light' ? 'dark' : 'light'
        applyTheme(next)
        localStorage.setItem(THEME_KEY, next)
    })
}
