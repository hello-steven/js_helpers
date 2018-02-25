/**
 * Simple function that checks element visibility
 * @param {Object} el element we want to check visibility of
 * @returns {boolean}
 */
function isVisible (el) {
  var fromTop = el.getBoundingClientRect().top;
  var eH = el.offsetHeight;
  var wH = window.innerHeight;
  return ((wH - fromTop > 0 || fromTop < 0) && fromTop + eH > 0);
}