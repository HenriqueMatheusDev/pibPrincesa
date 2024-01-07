var questions = [
  "Você está preparado para uma aventura que pode mudar sua vida?"
];

var cursorBackgrounds = [
  "./src/d3mlE7uhX8KFgEmY.webp",
  "./src/kPtv3UIPrv36cjxqLs.webp",
  "./src/l0HlUsr30YgIHASl2.webp",
  "./src/xUA7b6G577b74RSS3e.webp",
  "./src/a5viI92PAF89q.webp"
 
], previousBg;

var h1 = document.querySelector('h1');
var btn = document.querySelector('.button');

function init() {
  btn.addEventListener('click', function() {
    newQuestion();
  })
  
  newQuestion();
}

function newQuestion() {
  h1.innerHTML = questions[Math.floor(Math.random() * questions.length)];
  var tl = gsap.timeline(), mySplitText = new SplitText(h1, {type: "words,chars"}), chars = mySplitText.chars;

  tl.from(chars, {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 150,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01
  }); 
}

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

window.onload = init;