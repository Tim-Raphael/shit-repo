// SET SOME BODY CLASSES //////
//////////////////////////////

let documentName = document.location.pathname;

if (documentName.trim() === '/') {
  let documentName = 'index';
  document.body.classList.add(documentName);
} else {
  let documentName = document.location.pathname.split('/').pop().replace('.php', '');
  document.body.classList.add(documentName);
}

const atTheTop = () => {
  let scrollTop = window.pageYOffset;

  if (scrollTop < 50) {
    document.body.classList.add('atTheTop');
  } else {
    document.body.classList.remove('atTheTop');
  }
};
atTheTop();

let checkScrollDirectionIsUp = (event) => {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

window.addEventListener('wheel', function() {
  if (checkScrollDirectionIsUp(event)) {
    document.body.classList.remove('scrollingDown');
    document.body.classList.add('scrollingUp');
  } else {
    document.body.classList.remove('scrollingUp');
    document.body.classList.add('scrollingDown');
  }
  atTheTop();
});

// Trigger some Animations ////
//////////////////////////////

const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    entry.target.classList.replace('is-inViewport', 'toggledViewport')
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: .1
};

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});
