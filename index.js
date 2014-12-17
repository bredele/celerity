
/**
 * Speed rate.
 *
 * Examples:
 *
 *   var speed = celerity();
 *   speed(10);
 *   speed(100);
 *
 * @param {Number} initial position
 * @return {Function}
 * @api public
 */

module.exports = function(initial) {
  var t1 = new Date();
  var p1 = initial || 0;
  return function(position) {
    var t2 = new Date();
    var result = (position - p1) / (t2 - t1);
    t1 = t2;
    p1 = position;
    return result;
  };
};