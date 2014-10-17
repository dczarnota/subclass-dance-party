var celineBlinkyDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("celine");
  // this.$node = $('<span class="dancer" ></span>');
  // this.setPosition(top, left);
};
celineBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
celineBlinkyDancer.prototype.constructor = celineBlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


/*  celineBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    var newDancer = this;
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    newDancer.$node.toggle();
  };
*/

  // celineBlinkyDancer.prototype.setPosition = function(top, left){
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   var newDancer = this;
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   newDancer.$node.css(styleSettings);
  // };
