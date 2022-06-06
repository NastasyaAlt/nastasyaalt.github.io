'use strict';



// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();



window.addEventListener('load', function(){
  document.querySelector('body').classList.add("loaded");
  setTimeout(() => (document.getElementById('website-loader').style.display = "none"), 500);
});


const locoScroller = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroller'),
    smooth: true
})

locoScroller.on('scroll', ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".smooth-scroller", {
   scrollTop(value) {
     return arguments.length ? locoScroller.scrollTo(value, 0, 0) : locoScroller.scroll.instance.scroll.y;
   }, 
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   pinType: document.querySelector(".smooth-scroller").style.transform ? "transform" : "fixed"
 });

const logoScroll = document.querySelectorAll('.js-logo-scroll');
locoScroller.on("scroll", (position) => {
  if (position.scroll.y > 30) {
    logoScroll.forEach((logoText) => {
      logoText.classList.add('opacity');
      setTimeout(function () {
        logoText.classList.add('width-0');
      }, 200);
    });
  } else {
    logoScroll.forEach((logoText) => {
     logoText.classList.remove('width-0');
      setTimeout(function () {
        logoText.classList.remove('opacity');
      }, 10);
    });
  }
});

/*
let swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 80,
  slidesOffsetBefore: 100,
  pagination: {
    clickable: true,
  },
});
*/

const h1s = document.querySelectorAll('.heading');
h1s.forEach((h1) => {
  let words = h1.textContent.split(' ');
  words = words.map(word => {
    let letters = word.split('');
    letters = letters.map(letter => `<div class="letter_inner">${letter}</div>`);
    return letters.join('');
  });
  h1.innerHTML = words.join(' ');
});

const h2s = document.querySelectorAll('.subheading');
const arrh2 = Array.from(h2s);
arrh2.forEach((h2) => {
  let words = h2.innerText.split(' ') ;
  words = words.map(word =>`<div class="word_inner">${word}</div>`);
  h2.innerHTML = words.join(' ');

});

const about = document.querySelectorAll('.js-about');
const arrAbout = Array.from(about);
arrAbout.forEach((abw) => {
  let aboutWords = abw.innerText.split(' ') ;
  aboutWords = aboutWords.map(word =>`<div class="about_inner"><div class="about_word">${word}</div></div>`);
  abw.innerHTML = aboutWords.join(' ');

});



gsap.from('.letter_inner', {
  y: -150,
  rotation: 10,
  duration: 1,
  stagger: 0.05,
  delay: 0.5,
  ease: "power3.easeOut"
});

gsap.from('.intro-image__back', {
  height: 0,
  duration: 1,
  stagger: 0.05,
  delay: 0.5,
  ease: "power3.easeOut"
});


gsap.from('.header', {
  y: -150,
  duration: 1,
  stagger: 0.05,
  delay: 1,
  ease: "power3.easeOut"
});


gsap.from('.word_inner', {
  y: -150,
  rotation: 10,
  duration: 1,
  stagger: 0.05,
  delay: 0.5,
  ease: "power3.easeOut"
});



gsap.from('.about_word', {
  scrollTrigger: {
    trigger: ".about",
    scroller: ".smooth-scroller",
  },
  y: -150,
  rotation: 10,
  duration: 1,
  stagger: 0.05,
  ease: "power3.easeOut"
});


const workItems = document.querySelectorAll('.work-item');

workItems.forEach((workItem, index) => {
  let workTitle = workItem.querySelector('.js-work-title');
  let workTags = workItem.querySelectorAll('.work-tags__item');
  let workImg = workItem.querySelectorAll('.js-work-image');
  gsap.from(workTitle, {
    scrollTrigger: {
      trigger: workItem,
      scroller: ".smooth-scroller",
    },
    y: -150,
    rotation: 10,
    duration: 1,
    stagger: 0.5,
    ease: "power3.easeOut"
  });

  gsap.from(workTags, {
    scrollTrigger: {
      trigger: workItem,
      scroller: ".smooth-scroller",
    },
    y: -150,
    rotation: 10,
    duration: 1,
    stagger: 0.1,
    ease: "power3.easeOut"
  });

  gsap.from(workImg, {
    scrollTrigger: {
      trigger: workItem,
      scroller: ".smooth-scroller",
    },
    height: 0,
    duration: 1,
    stagger: 0.05,
    delay: 0.5,
    ease: "power3.easeOut"
  });
});

/*
gsap.from(['.slider-info__count', '.slider-info__right div', '.slider-info__title'], {
  scrollTrigger: {
    trigger: ".work",
    scroller: ".smooth-scroller",
  },
  y: -150,
  rotation: 10,
  duration: 1,
  stagger: 0.05,
  ease: "power3.easeOut"
});

const toSliderImg = gsap.from('.slider-image img', {
  scrollTrigger: {
    trigger: ".work",
    scroller: ".smooth-scroller",
  },
  height: 0,
  duration: 1,
  stagger: 0.05,
  ease: "power3.easeOut"
});

*/

gsap.from('.footer-list li', {
  scrollTrigger: {
    trigger: ".footer-wrapper",
    scroller: ".smooth-scroller",
  },
  y: -150,
  rotation: 10,
  duration: 1,
  stagger: 0.05,
  delay: 0.5,
  ease: "power3.easeOut"
});

ScrollTrigger.addEventListener("refresh", () => locoScroller.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();