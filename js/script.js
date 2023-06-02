var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
// Get a reference to the <html> element
// Get a reference to the <html> element
const htmlEl = document.querySelector('html');

// Add a listener for the scroll event
window.addEventListener('scroll', () => {
  // If the toggle is open, add the 'scroll-lock' class to the <html> element
  if (navMenu.classList.contains('open')) {
    htmlEl.classList.add('scroll-lock');
  } else {
    htmlEl.classList.remove('scroll-lock');
  }
});

// Add a listener for the scroll event

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  htmlEl.classList.remove('scroll-lock');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

function storeInput() {
  var inputValue = document.getElementById('input-field').value;
  console.log(inputValue, 'inputValue');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(inputValue)) {
    fetch(`https://defivas.xyz/api/user/landingPage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('POST request was successful');
          Swal.fire(
            'You’re all set!',
            'The latest news is coming your way!',
            'success'
          );
        } else {
          console.error('Error in POST request');
        }
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });
  } else {
    Swal.fire('Please enter proper email', 'Example : example@ex.com', 'error');
  }
}
var inputValue = document.getElementById('input-field');
inputValue.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    //checks whether the pressed key is "Enter"
    storeInput();
    console.log('click');
  }
});
