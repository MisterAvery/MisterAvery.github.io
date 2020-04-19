let nav = document.querySelector('#nav');
let links = document.querySelector('.links');
let hamburger = document.querySelector('.hamburger');

document.addEventListener('click', function(event) {
  if(window.innerWidth <= 675 && event.target == hamburger) {
    if(nav.style.height == '70vh') {
      nav.style.height = '43px';
      links.style.display = 'none';
    } else {
      nav.style.height = '70vh';
      links.style.display = 'flex';
    }
  }
});

window.addEventListener('resize', function() {
  if(window.innerWidth > 675) {
    links.style.display = 'flex';
    nav.style.height = '50px';
  } else {
    links.style.display = 'none';
    nav.style.height = '43px';
  }
})