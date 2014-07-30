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
    var x = [];
    var interactSettings = {
      top: 100,
      left: 100,
      border: 100

    };
      for(var i=0; i<window.dancers.length; i++){
      var top1 = window.dancers[i]['$node'][0]['style']['top'];
      top1 = parseInt(top1);

      var selectDancer = window.dancers[i]['$node'];

        for(var j=0; j<window.dancers.length; j++){
          var left1 = window.dancers[j]['$node'][0]['style']['left'];
          left1 = parseInt(left1);
            if(top1 < 400 && left1 < 400) {
              $(selectDancer).animate({
                    left:'750px',
                    opacity:'0.5',
                    height: 'auto',
                    width:'25%'
                });
            }
          }
        }
    });
});


