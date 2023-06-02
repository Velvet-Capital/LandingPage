const text = document.querySelector('.sec-text');

const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Asset Managers';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Hedge Funds';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'Family Offices';
  }, 8000); //1s = 1000 milliseconds
  setTimeout(() => {
    text.textContent = 'DAOs';
  }, 12000);
  setTimeout(() => {
    text.textContent = 'Fintechs';
  }, 16000);
  setTimeout(() => {
    text.textContent = 'Traders';
  }, 20000);
  setTimeout(() => {
    text.textContent = 'Banks';
  }, 24000);
};

textLoad();
setInterval(textLoad, 28000);

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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};
btn2.onclick = function () {
  modal.style.display = 'block';
};
btn3.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function storeEmailAndMessage() {
  var inputValue1 = document.getElementById('inputOne').value;
  var inputValue2 = document.getElementById('inputTwo').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(inputValue1)) {
    fetch(`https://defivas.xyz/api/user/institutional`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue1,
        message: inputValue2,
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
