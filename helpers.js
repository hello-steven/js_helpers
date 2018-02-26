/**
 * Checks the visibility of a DOM element
 * @param {Object} el dom element
 */
function isVisible (el) {
  let fromTop = el.getBoundingClientRect().top;
  let eH = el.offsetHeight;
  let wH = window.innerHeight;
  return ((wH - fromTop > 0 || fromTop < 0) && fromTop + eH > 0);
}
