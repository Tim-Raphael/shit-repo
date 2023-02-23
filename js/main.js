// set some body classes
//===//
const documentName = document.location.pathname;

if (documentName.trim() === '/') {
  let documentName = 'index';
  document.body.classList.add(documentName);
} else {
  let documentName = document.location.pathname.split('/').pop().replace('.php', '');
  document.body.classList.add(documentName);
}

const atTheTop = () => {
  let scroll = window.pageYOffset;

  if (scroll < 50) {
    document.body.classList.add('atTheTop');
  } else {
    document.body.classList.remove('atTheTop');
  }
};
atTheTop();

const checkScrollDirectionIsUp = () => {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

window.addEventListener('scroll', () => {
  if (checkScrollDirectionIsUp()) {
    document.body.classList.remove('scrollingDown');
    document.body.classList.add('scrollingUp');
    
  } else {
    document.body.classList.remove('scrollingUp');
    document.body.classList.add('scrollingDown');
  }
  atTheTop();

  // Paralax 
  const scroll = window.scrollY
  const bgParalax = document.body.querySelectorAll('.bgParalax');

  if (bgParalax) {
    bgParalax.forEach(el => {
      const gradientContainer = el.querySelector('.gradientContainer');
      gradientContainer.style.transform = `translateY(${scroll * .75}px)`;
    });
  }
});
//===//

// trigger some animations
//===//
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    entry.target.classList.add('toggledViewport', entry.isIntersecting)
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: .1
};

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(el => {
  Obs.observe(el, obsOptions);
});
//===//

// animate favicon
//===//
const favicon = document.querySelector('link[rel~="icon"]');

setInterval(() => {
  if (favicon.href.includes('favicon.ico')) {
    favicon.href = '/images/favicon2.ico'
  } else {
    favicon.href = '/images/favicon.ico'
  }
}, 1000);
//===//