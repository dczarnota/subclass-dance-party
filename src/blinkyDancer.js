//BLINKYDANCER.JS


var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = this.step;
  /*this.step = this.blinkyStep;*/
};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

/*MakeBlinkyDancer.prototype.blinkyStep = function(){
  // call the old version of step at the beginning of any
    //call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use o a jQuery-wrapped html tag.
  console.log('this is a blinky step');
  var blinky = this;
  blinky.$node.toggle(0, blinky.oldStep);
};*/

/*
  TypeError: Cannot read property 'toggle' of undefined
    at HTMLSpanElement.MakeBlinkyDancer.blinkyStep
    (file:///Users/student/Code/davidnguyen/
    2014-07-subclass-dance-party/src/blinkyDancer.js:21:13)
  });*/
