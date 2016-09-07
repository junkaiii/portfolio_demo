// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  var tweenh = TweenMax.fromTo('#h', 0.3, {y: '+=50'},{y: '-=50', repeat: 1, yoyo: true, delay: 0.2});

  var sceneh = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 450,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenh)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweene = TweenMax.fromTo('#e', 0.3, {y: '+=50'},{y: '-=50', repeat: 1, yoyo: true, delay: 0.2});

  var scenee = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 480,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweene)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweenl = TweenMax.fromTo('#l', 0.3, {y: '+=50'},{y: '-=50', repeat: 1, yoyo: true, delay: 0.2});

  var scenel = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 510,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenl)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweenl_ = TweenMax.fromTo('#l_', 0.3, {y: '+=50'},{y: '-=50', repeat: 1, yoyo: true, delay: 0.2});

  var scenel_ = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 540,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenl_)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweeno = TweenMax.fromTo('#o', 0.3, {y: '+=50'},{y: '-=50', repeat: 1, yoyo: true, delay: 0.2});

  var sceneo = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 570,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweeno)
  .addIndicators()
  .addTo(scrollMagicController);


});
