function debounce(func, wait = 20, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const featuresBox = document.querySelectorAll(".feature-box");

function revealTheBox(e) {
  featuresBox.forEach(feature => {
    const revealAt =
      window.scrollY + window.innerHeight - feature.clientHeight / 2;
    const featureBottom =
      window.scrollY +
      feature.getBoundingClientRect().top +
      feature.clientHeight;
    const isHalfShown =
      revealAt > window.scrollY + feature.getBoundingClientRect().top;
    const isNotScrolledPast = window.scrollY < featureBottom;

    if (isHalfShown && isNotScrolledPast) {
      feature.classList.add("active");
    } else {
      feature.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(revealTheBox));

// Toggle Menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navBranding = document.querySelector(".nav__branding");
const navItems = document.querySelectorAll(".nav__item");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    navigation.classList.add("show");
    navMenu.classList.add("show");
    navBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    navigation.classList.remove("show");
    navMenu.classList.remove("show");
    navBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
