const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const aboutMeButton = document.getElementById('about-me-button')

const email = document.getElementById('email-input')
const message = document.getElementById('message-input')
const submitButton = document.getElementById('submit-button')

function toggleButton() {
  navList.classList.toggle('show')
}

function goToAboutMe() {
  window.location.href = '#about-me'
}

hamburgerButton.addEventListener('click', toggleButton)
aboutMeButton.addEventListener('click', goToAboutMe)
submitButton.addEventListener('click', checkEmail)

//form onSubmit....set on the submit button onClick?? 
//look at the email input
//If the email is 'ericjonesmyemail@gmail.com'
//Change the message to 'Eric Jones, go fuck yourself'
//Send to ericjonesmyemail@gmail.com
//else, form action="https://formsubmit.co/b5401f0a7ff5ea4761953ab50381d0ed "

function checkEmail() {
  if (email.value === 'ericjonesmyemail@gmail.com') {
    message.value = "Eric Jones, fuck off."
    document.contact_form.action = "https://formsubmit.co/ericjonesmyemail@gmail.com"
    console.log(email.value + " is a bastard")
  } else {
    document.contact_form.action = "https://formsubmit.co/b5401f0a7ff5ea4761953ab50381d0ed "
  }
}