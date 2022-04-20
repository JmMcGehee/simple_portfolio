const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const aboutMeButton = document.getElementById('about-me-button')

function toggleButton() {
  navList.classList.toggle('show')
}

function goToAboutMe() {
  window.location.href = '#about-me'
}

hamburgerButton.addEventListener('click', toggleButton)
aboutMeButton.addEventListener('click', goToAboutMe)