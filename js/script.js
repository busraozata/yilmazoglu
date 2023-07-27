const menuToggle = document.querySelector(".menu-toggle");
const wrapper = document.querySelector(".wrapper");
const navigation = document.querySelector(".menu-area");
const collapse = document.querySelector(".collapse");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  collapse.classList.toggle("active");
  navigation.classList.toggle("active");
  wrapper.classList.toggle("menu--is-revealed");
  header.classList.toggle("bg-color");
  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
});

$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("form").submit(function (event) {
    event.preventDefault();
    return false;
  });
});

var mySwiperCurrent = new Swiper(".mySwiperCurrent", {
  navigation: {
    nextEl: "#swiper-button-next1",
    prevEl: "#swiper-button-prev1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var mySwiperNews = new Swiper(".mySwiperNews", {
  navigation: {
    nextEl: "#swiper-button-next3",
    prevEl: "#swiper-button-prev3",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
      /* grid: {
        rows: 2,
      }, */
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1500: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
  },
});

var swiperServiceSlide = new Swiper(".swiperServiceSlide", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-button-nextService",
    prevEl: "#swiper-button-prevService",
  },
});

var mySwiperLastBlog = new Swiper(".mySwiperLastBlog", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



function toggleTab(e) {
  var hrefVal = $(e).attr("href");
  $(".nav-tabs li").removeClass("active");
  $('.nav-tabs li[data-active="' + hrefVal + '"]').addClass("active");
}

/* ------------------------------------------------------------- */

$(".mega-menu .sub-item .dropdown-item").on("mouseover", function () {
  var imgPath = $(this).attr("data-image");

  $(".mega-menu .img-wrapper img").attr("src", imgPath);
});
/* ------------------------------------------------------------- */


var swiperGallery = new Swiper(".ImgGalleryMySwiper", {

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


var swiper = new Swiper(".mySwiperOurProjects", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});


var swiper = new Swiper(".mySwipertest", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2test", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  effect: "fade",
  loop: true,
  loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 2,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
      1366: {
          slidesPerView: 4,
          spaceBetween: 80,
      },
  },

});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// Fancybox Config
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});