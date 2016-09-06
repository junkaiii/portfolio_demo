// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  var tweenh1 = TweenMax.to('#h', 0.4, {
    y: '-=50'});

  var tweenh2 = TweenMax.to('#h', 0.3, {
    y: '+=50', delay: 0.4});


  var sceneh1 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 450,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenh1)
  .addIndicators()
  .addTo(scrollMagicController);

  var sceneh2 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 455,  /* offset the trigger 150px below #scene's top */
    // duration: 10 /* for 300 pixels down */
  })
  .setTween(tweenh2)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweene1 = TweenMax.to('#e', 0.4, {
    y: '-=50'});

  var tweene2 = TweenMax.to('#e', 0.3, {
    y: '+=50', delay: 0.4});


  var sceneh1 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 470,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweene1)
  .addIndicators()
  .addTo(scrollMagicController);

  var sceneh2 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 475,  /* offset the trigger 150px below #scene's top */
    // duration: 10 /* for 300 pixels down */
  })
  .setTween(tweene2)
  .addIndicators()
  .addTo(scrollMagicController);

  var tweenl1 = TweenMax.to('#l', 0.4, {
    y: '-=50'});

  var tweenl2 = TweenMax.to('#l', 0.3, {
    y: '+=50', delay: 0.4});


  var scenel1 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 490,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenl1)
  .addIndicators()
  .addTo(scrollMagicController);

  var scenel2 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 495,  /* offset the trigger 150px below #scene's top */
    // duration: 10 /* for 300 pixels down */
  })
  .setTween(tweenl2)
  .addIndicators()
  .addTo(scrollMagicController);


  var tweenl_1 = TweenMax.to('#l_', 0.4, {
    y: '-=50'});

  var tweenl_2 = TweenMax.to('#l_', 0.3, {
    y: '+=50', delay: 0.4});


  var scenel_1 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 510,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweenl_1)
  .addIndicators()
  .addTo(scrollMagicController);

  var scenel_2 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 515,  /* offset the trigger 150px below #scene's top */
    // duration: 10 /* for 300 pixels down */
  })
  .setTween(tweenl_2)
  .addIndicators()
  .addTo(scrollMagicController);


  var tweeno1 = TweenMax.to('#o', 0.4, {
    y: '-=50'});

  var tweeno2 = TweenMax.to('#o', 0.3, {
    y: '+=50', delay: 0.4});


  var sceneo1 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 530,  /* offset the trigger 150px below #scene's top */
    // duration: 30 /* for 300 pixels down */
  })
  .setTween(tweeno1)
  .addIndicators()
  .addTo(scrollMagicController);

  var sceneo2 = new ScrollMagic.Scene({
    triggerElement: '#scene1',
    offset: 535,  /* offset the trigger 150px below #scene's top */
    // duration: 10 /* for 300 pixels down */
  })
  .setTween(tweeno2)
  .addIndicators()
  .addTo(scrollMagicController);


});
