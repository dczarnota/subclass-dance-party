// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};
  // use jQuery to create an HTML <span> tag


  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var newDancer = this;
    setTimeout(function() {newDancer.step()}, newDancer._timeBetweenSteps);
  };


  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var newDancer = this;
    var styleSettings = {
      top: top,
      left: left
    };
    console.log(top);
    console.log(left);
    newDancer.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function() {
    var newDancer = this;
    var lineUpSettings = {
      left: 0
    };
    newDancer.$node.css(lineUpSettings);
  }


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


