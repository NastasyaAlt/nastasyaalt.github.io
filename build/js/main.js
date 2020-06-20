'use strict';
window.onload = function() {

	const easeInCubic = function (t) { return t*t*t }	
	const scrollElems = document.getElementsByClassName('scroll_elem');
	const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
	//debugger;
	const runtime = stamp - start;
	let progress = runtime / duration;
	const ease = easeInCubic(progress);

	progress = Math.min(progress, 1);
	const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
	window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

	if(runtime < duration){
		requestAnimationFrame((timestamp) => {
			const stamp = new Date().getTime();
			scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
			})
		}
	}

	for(let i=0; i<scrollElems.length; i++){
		const elem = scrollElems[i];

		elem.addEventListener('click',function(e) {
			e.preventDefault();
			const scrollElemId = e.target.href.split('#')[1];
			const scrollEndElem = document.getElementById(scrollElemId);

			const anim = requestAnimationFrame(() => {
				const stamp = new Date().getTime();
				const duration = 500;
				const start = stamp;

				const startScrollOffset = window.pageYOffset;

				const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

				scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
				// scrollToElem(scrollEndElemTop);
			})
		})
	}
}

function addClass(el, className) {
    var el = document.querySelector(el);
      if (el.classList) {
        el.classList.add(className);
        document.body.classList.add('modal-open');
      } else {
        el.className += ' ' + className;
      }

 	/*
    for (let i = 0; i < el.length; i++) {
      if (el.classList) {
        el[i].classList.add(className);
      } else {
        el[i].className += ' ' + className;
      }
    }*/
}

function removeClass(el, className) {
    var el = document.querySelector(el);
      if (el.classList) {
        el.classList.remove(className);
         document.body.classList.remove('modal-open');
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
}
