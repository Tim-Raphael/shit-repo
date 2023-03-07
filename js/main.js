// check if feature is supported
//===//
const isFormatSupported = (format, dataUri) =>
new Promise((resolve, reject) => {
  const image = new Image();

  image.src = `data:image/${format};base64,${dataUri}`;

  image.onload = () => {
    resolve(true);
  };

  image.onerror = () => {
    reject(format.toUpperCase() + " format not supported. Images loaded as a .jpg 😞.");
  };
});

// avif file format
const supportsAvif = isFormatSupported(
  "avif",
  "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
);
//===//

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
    entry.target.classList.toggle("isInViewport", entry.isIntersecting);
    if (entry.target.classList.contains('isInViewport')) {
      entry.target.classList.add('toggledViewport', entry.isIntersecting);
    }
    // lazyload images
    if (entry.target.hasAttribute('data-src') && entry.isIntersecting) {
      if (supportsAvif) {
        entry.target.src = entry.target.getAttribute('data-src').replace('.jpg', '.avif');
      } else {
        entry.target.src = entry.target.getAttribute('data-src');
      }
    }
  });
};

const observer = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: 0,
};

const elsInViewport = document.querySelectorAll('[data-inviewport]');
elsInViewport.forEach(el => {
  observer.observe(el, obsOptions);
});
//===//
