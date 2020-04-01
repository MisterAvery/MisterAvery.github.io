let nav = document.getElementById('nav');
let links = document.querySelector('.links');

document.addEventListener('click', function(event) {
  if(window.innerWidth <= 675 && event.target == nav || event.target == links) {
    if(nav.style.height == '60vh') {
      nav.style.height = '43px';
      links.style.display = 'none';
    } else {
      nav.style.height = '60vh';
      links.style.display = 'flex';
    }
  }
});

window.addEventListener('resize', function() {
  if(window.innerWidth > 675) {
    links.style.display = 'flex';
  } else {
    links.style.display = 'none';
  }
})