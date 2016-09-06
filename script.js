// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s
  var tween = TweenMax.to('#hello_world', 0.5, {
    color: 'rgb(255,0,255)',
    scale: 0.2,
    rotation: 360
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 650,  /* offset the trigger 150px below #scene's top */
    duration: 300 /* for 300 pixels down */
  })
  .setTween(tween)
  .addTo(scrollMagicController);

  // Add debug indicators fixed on right side
   scene.addIndicators();

});
