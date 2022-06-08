/************************ Hamburger Menu ************************/ 
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// navigate to homepage when clicking the logo
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/portfolio/index.html'
})


/************************ Hamburger Menu ************************/ 

/************************ Contact form input Validation **************************/
const validateForm = async() =>{
  document.querySelector('.status').style.color = "red";
  const name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty!";
      return false;
  }
  const email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty!";
      return false;
  } else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid!";
          return false;
      }
  }
  const message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty!";
      console.log("message is null")
      return false;
  }
  
  document.querySelector('.status').innerHTML = "Sending...";
  document.querySelector('.status').style.color  = "black";
  document.querySelector('.status').style.fontWeight  = "bold";
 
  // wait 1000ms before submitting (in order to display the message "Sending")
  // Using asynchronous function in order to use the setTimeout function before "submit"
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  document.getElementById('contact-form').submit();
  document.getElementById('contact-form').reset(); // clear form after submission
    
};


/************************ Scroll up icon functionality **************************/
// id: scroll-up-icon
// id: scroll-up-reference

var scrollReference = document.querySelector("#scroll-up-reference"); 
var scrollUpIcon = document.querySelector("#scroll-up-icon");

// scroll to top functionality
scrollUpIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// @ https://fjolt.com/article/javascript-check-if-user-scrolled-to-bottom
document.addEventListener('DOMContentLoaded', function(e) {
  document.addEventListener('scroll', function(e) {
      let documentHeight = document.body.scrollHeight;
      let currentScroll = window.scrollY + window.innerHeight;
      // When the user is modifier px from the bottom, fire the event.
      let modifier = 3200; 
      if(currentScroll + modifier > documentHeight) {
          scrollUpIcon.style.display="block";
      }
      else{
          scrollUpIcon.style.display="none";
      }
  })
})

/************************ End: Scroll up icon functionality **************************/
