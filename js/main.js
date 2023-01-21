// SET SOME BODY CLASSES //////
//////////////////////////////

let documentName = document.location.pathname;

if (documentName.trim() === '/') {
  let documentName = 'index';
  document.body.classList.add(documentName);
}else {
  let documentName = document.location.pathname.split('/').pop().replace('.php', '');
  document.body.classList.add(documentName);
}

function atTheTop() {
  let scrollTop = window.pageYOffset;

  if (scrollTop < 50) {
    document.body.classList.add('atTheTop');
  } else {
    document.body.classList.remove('atTheTop');
  }
};

atTheTop();

window.addEventListener('wheel', function() {
  atTheTop();

  if (checkScrollDirectionIsUp(event)) {
    document.body.classList.remove('scrollingDown');
    document.body.classList.add('scrollingUp');
  } else {
    document.body.classList.remove('scrollingUp');
    document.body.classList.add('scrollingDown');
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
