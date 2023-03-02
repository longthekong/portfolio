const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navItem = document.querySelectorAll(".nav_item_menu")
const header = document.getElementById("header")

// otevirani a zavirani menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu--open");
  changeIcon();
});

// zavirani menu, kdyz se klikne na odkaz casti
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav_menu--open")) {
      navMenu.classList.remove("nav_menu--open");
    }
    changeIcon();
  });
});

// prepnuti ikonky menu na krizek a zpet
function changeIcon() {
  if (navMenu.classList.contains("nav_menu--open")) {
    navToggle.classList.replace("ri-menu-2-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-2-line");
  }
};

// Zájmy slajd
var hobbiesSlide = new Swiper(".hobbies_wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },


  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});


// Omně slajd
var aboutSlide = new Swiper(".about_wrapper_cards", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  
});

// tlacitko na zacatek stranky
document.getElementById("scroll-to-top").addEventListener("click", function() {
  window.scrollTo(0, 0);
});

// projekt filtr
var mixer = mixitup('.projects_container', {
  selectors: {
    target: '.projects_card'
  },

  animation: {
    effects: 'fade scale',
    duration: 500,  
  },
});

// animace hlavicky
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// animace
const animation = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

animation.reveal(".hero_content, .about_content, .about_wrapper_cards, .hobbies_wrapper, .skills_wrapper, .qualification_wrapper, .projects_wrapper, .contact_wrapper, .footer_wrapper, .footer_wrapper2", {
  interval: 100,
});

animation.reveal(".section_header", {
  origin: "left",
  delay: 100,
});








