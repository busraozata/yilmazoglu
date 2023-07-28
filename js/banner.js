const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".slide-item");
const slideCount = slides.length;
console.log("iki", slideCount);
fraction.innerHTML = `<span class="start-count"> 01</span> <span class="counter-length">0${slideCount}</span>`;
var swiperBanner = new Swiper(".mySwiperBanner", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-button-next1",
    prevEl: "#swiper-button-prev1",
  },
  effect: "fade",
  on: {
    slideChange: () => {
      fraction.innerHTML = `<span class="start-count">0${
        swiperBanner.realIndex + 1
      }</span> <span class="counter-length">0${slideCount}</span>`;
    },
  },
});

var rect = $("#container")[0].getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };

$("#container").mousemove(function (e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
TweenLite.ticker.addEventListener("tick", function () {
  if (mouse.moved) {
    parallaxIt(".slide", 20);
    parallaxIt(".move-img1", -30);
    parallaxIt(".move-img2", 10);
    parallaxIt(".move-img3", -3);
    parallaxIt(".move-img4", 30);
    parallaxIt(".move-img5", -20);
    parallaxIt(".move-img6", 50);
    parallaxIt(".move-img7", -50);
    parallaxIt(".move-img8", -50);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.3, {
    x: ((mouse.x - rect.width / 2) / rect.width) * movement,
    y: ((mouse.y - rect.height / 2) / rect.height) * movement,
  });
}

$(window).on("resize scroll", function () {
  rect = $("#container")[0].getBoundingClientRect();
});
