// SET SOME BODY CLASSES //////
////////////////////////////// 
let documentName = document.location.pathname.split('/').pop();
if (documentName === ''){
  documentName = 'index.php';
}
document.body.classList.add(documentName);

window.addEventListener('wheel', function() {
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