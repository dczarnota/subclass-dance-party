var gifDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('banana');
};
gifDancer.prototype = Object.create(makeDancer.prototype);
gifDancer.prototype.constructor = gifDancer;
