function getSelection() {
  return document.getSelection().toString();
}
var x, y;
window.addEventListener('click', function (e) {
  // Avoid grabbing for the actual selection
  // Doesn't seem to execute on single click anyways
  //  but add for good measure
  if (e.button === 2) {
    x = e.clientX;
    y = e.clientY;
  }
}, true);
function jumpToAnchor() {
  x = Math.max(0, Math.min(window.innerWidth, x));
  y = Math.max(0, Math.min(window.innerHeight, y));

  var node;
  var hasSelection = getSelection();
  if (hasSelection) {
    // For some reason, we can't just check ourselves here for
    //  getSelection().anchorNode, as it is always present
    node = document.getSelection().anchorNode;
  }
  else {
    var caretPosition = document.caretPositionFromPoint(x, y);
    node = caretPosition.offsetNode;
  }

  function findDeepestLastChild(elem) {
    var oldElem;
    do {
      oldElem = elem;
      elem = elem.lastElementChild;
    } while (elem);
    return oldElem;
  }
  function foundAnchor(nde) {
    if (nde.id || (nde.name && nde.nodeName.toLowerCase() === 'a')) {
      location.hash = '#' + (nde.id || nde.name);
      return true;
    }
  }

  do {
    if (foundAnchor(node)) {
      break;
    }

    if (node.previousElementSibling) {
      node = findDeepestLastChild(node.previousElementSibling);
    }
    else {
      node = node.parentNode;
    }
  } while (node);
}
