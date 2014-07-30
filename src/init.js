$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
                              //window["makeBlinkyDancer"]

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor($("body").height() * Math.random()),
      Math.floor($("body").width() * Math.random()),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $("body").on('mouseenter', 'span', function(event){
    $(this).fadeOut(500);
    $(this).fadeIn(500);
    event.preventDefault();
  });

  $(".interactButton").on("click", function(event){
      for(var i=0; i<window.dancers.length; i++){
      var top1 = (window.dancers[i]['$node'][0]['style']['top']).slice(0,3);
      top1 = Number(top1);
        if(top1 < 500) {
          window.dancers[i].lineUp();
        }
      }
    event.preventDefault();

    });

    // var left = window.dancers[i]['$node'][0]['style']['left'];

    /* if ((obj1[top] - obj2[top]) < 100)
      then obj1 and obj2 do something;*/
        // for(var j=0; j<window.dancers.length; j++){
        //    var top2 = window.dancers[j]['$node'][0]['style']['top'];
        //     if(Math.abs(top1 - top2) <= 500){
        //       window.dancers[i].lineUp();
        //       window.dancers[j].lineUp();
        //     }
        // }

    // obj1 top: 244, left 1289
    // obj2 top: 102, left 947
    // obj3 top: 500, left: 600
    // console.log(window.dancers[0]['$node'][0]['style']['top']);
    // console.log(window.dancers[0]['$node'][0]['style']['left']);
    //


/*  if(window.dancers.length > 10){
    $("body").css('background-image' 'url("http://www.voxmagazine.com/wp-content/uploads/2013/03/1x02_Top_Banana_44.png")');
  }
*/
// window.dancers[0]
});
/* .animate( properties [, duration ] [, easing ] [, complete ] )
$( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });*/

