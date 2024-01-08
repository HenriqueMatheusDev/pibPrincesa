var cursorBackgrounds = [
  "./src/d3mlE7uhX8KFgEmY.webp",
  "./src/kPtv3UIPrv36cjxqLs.webp",
  "./src/l0HlUsr30YgIHASl2.webp",
  "./src/xUA7b6G577b74RSS3e.webp",
  "./src/a5viI92PAF89q.webp"
 
], previousBg;

var h1 = document.querySelector('h1');
var btn = document.querySelector('.button');


document.addEventListener('DOMContentLoaded', function () {
  var redirectButton = document.getElementById('redirectButton');

  redirectButton.addEventListener('click', function () {
      window.location.href = 'indexplay.html';
  });
});


var cursor = document.querySelector('.cursor');

function moveCircle(e) {
	gsap.set(cursor, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

$('.button').mouseover(function() {
  randomBg();
  $('.cursor').css('display', 'block');
});

function randomBg() {
  var random = Math.floor(Math.random() * cursorBackgrounds.length);
  
  if(random === previousBg) {
    if(random == cursorBackgrounds.length) random--
    else random++;
  }
  
  previousBg = random;
  $('.cursor').css('background', 'url(' + cursorBackgrounds[random] + ')');
  $('.cursor').css('background-size', 'cover');
  $('.cursor').css('background-position', 'center');
}

$('.button').mouseleave(function() {
  $('.cursor').css('display', 'none');
});

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-text-topo',
{
  duration:2000,
  distance: '60px'
})
