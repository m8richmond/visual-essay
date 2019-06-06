var controller = new ScrollMagic.Controller();

// var backgroundColorTween1 = TweenMax.to("#body", 1, {backgroundColor: '#CFFF0B'});
// var backgroundColorTween2 = TweenMax.to("#body", 1, {backgroundColor: '#3759ED'});
// var backgroundColorTween3 = TweenMax.to("#body", 1, {backgroundColor: '#ED3753'});

var pbjttween = TweenMax.fromTo("#peanutbutterjellytime", 1,
              {left: "+=0", top: "-=0"},
              {left: "+=350", top: "-=20", repeat: -1, yoyo: true, ease: Linear.easeInOut});

var oneDoesNotTween = TweenMax.fromTo("#onedoesnotdiv", 1,
              {x:  "-=0", y: "+=70", opacity: 0, rotation: 0},
              {x:  "-=80", y: "+=0", opacity: 1, rotation: 0, ease: Cubic.easeOut});

var deepfried1Tween = TweenMax.fromTo("#deepfried1div", 1,
              {x:  "+=0", opacity: 0, rotation: 0},
              {x:  "+=40", opacity: 1, rotation: 0, ease: Cubic.easeOut});

var struttingleo2Tween = TweenMax.fromTo("#struttingleo2img", 1,
              {x:  "-=0", y: "-=0",opacity: 0, rotation: 0},
              {x:  "-=20", y: "-=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var struttingleo3Tween = TweenMax.fromTo("#struttingleo3img", 1,
              {x:  "+=0", y: "-=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "-=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var struttingleo4Tween = TweenMax.fromTo("#struttingleo4img", 1,
              {x:  "+=0", y: "-=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "-=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});

var plank2Tween = TweenMax.fromTo("#plank2img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var plank3Tween = TweenMax.fromTo("#plank3img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var plank4Tween = TweenMax.fromTo("#plank4img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});

var nyanTween = TweenMax.fromTo("#nyanimg", 1,
              {x:  "+=0", y: "-=0"},
              {x:  "+=2400", y: "-=200", ease: Cubic.easeOut});

var dogeIntenseTween = TweenMax.fromTo("#dogegroup2img", 1,
              {x:  "+=0", y: "+=0", opacity: 0},
              {x:  "+=30", y: "+=30",opacity: 1, ease: Cubic.easeOut});

var owl2Tween = TweenMax.fromTo("#owl2img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var owl3Tween = TweenMax.fromTo("#owl3img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var owl4Tween = TweenMax.fromTo("#owl4img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var owl5Tween = TweenMax.fromTo("#owl5img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});

var situation2Tween = TweenMax.fromTo("#situation2img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var situation3Tween = TweenMax.fromTo("#situation3img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var situation4Tween = TweenMax.fromTo("#situation4img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});

var chinese2Tween = TweenMax.fromTo("#chinese2img", 1,
              {x:  "-=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "-=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var chinese3Tween = TweenMax.fromTo("#chinese3img", 1,
              {x:  "+=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "+=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});
var chinese4Tween = TweenMax.fromTo("#chinese4img", 1,
              {x:  "-=0", y: "+=0",opacity: 0, rotation: 0},
              {x:  "-=20", y: "+=40",opacity: 1, rotation: 0, ease: Cubic.easeOut});






// var bgColor1 = new ScrollMagic.Scene({offset: 320 ,duration: 120})
//                 .setTween(backgroundColorTween1)
//                 .setPin("#header", {pushFollowers: false})
//                 .addIndicators(true)
//                 .addTo(controller);
// var bgColor2 = new ScrollMagic.Scene({offset: 2500 ,duration: 120})
//                 .setTween(backgroundColorTween2)
//                 .setPin("#header", {pushFollowers: false})
//                 .addIndicators(true)
//                 .addTo(controller);
// var bgColor3 = new ScrollMagic.Scene({offset: 4800 ,duration: 120})
//                 .setTween(backgroundColorTween3)
//                 .setPin("#header", {pushFollowers: false})
//                 .addIndicators(true)
//                 .addTo(controller);
var pbjtscene = new ScrollMagic.Scene({triggerElement: "#header", duration: 500, offset: 550})
        .setTween(pbjttween)
        // .addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);

var oneDoesNotScene = new ScrollMagic.Scene({triggerElement: "#header", duration: 120, offset: 800})
        .setTween(oneDoesNotTween)
        // .addIndicators(true) // add indicators (requires plugin)
        .addTo(controller);

var deepfried1Scene = new ScrollMagic.Scene({triggerElement: "#header", duration: 120, offset: 1520})
        .setTween(deepfried1Tween)
        // .addIndicators(true) // add indicators (requires plugin)
        .addTo(controller);

var struttingleo2Scene = new ScrollMagic.Scene({triggerElement: "#leowrapper", duration: 100, offset: 120})
        .setTween(struttingleo2Tween)
        // .addIndicators(true) // add indicators (requires plugin)
        .addTo(controller);
var struttingleo3Scene = new ScrollMagic.Scene({triggerElement: "#leowrapper", duration: 100, offset: 240})
        .setTween(struttingleo3Tween)
        // .addIndicators(true) // add indicators (requires plugin)
        .addTo(controller);
var struttingleo4Scene = new ScrollMagic.Scene({triggerElement: "#leowrapper", duration: 100, offset: 360})
        .setTween(struttingleo4Tween)
        // .addIndicators(true) // add indicators (requires plugin)
        .addTo(controller);

    var plank2Scene = new ScrollMagic.Scene({triggerElement: "#plankingwrapper", duration: 90, offset: 100})
            .setTween(plank2Tween)
            // .addIndicators(true) // add indicators (requires plugin)
            .addTo(controller);
    var plank3Scene = new ScrollMagic.Scene({triggerElement: "#plankingwrapper", duration: 90, offset: 200})
            .setTween(plank3Tween)
            // .addIndicators(true) // add indicators (requires plugin)
            .addTo(controller);
    var plank4Scene = new ScrollMagic.Scene({triggerElement: "#plankingwrapper", duration: 90, offset: 300})
            .setTween(plank4Tween)
            // .addIndicators(true) // add indicators (requires plugin)
            .addTo(controller);

  var nyanScene = new ScrollMagic.Scene({triggerElement: "#ancientaliensdiv", duration: 700, offset: 250})
          .setTween(nyanTween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);

  var dogeIntenseScene = new ScrollMagic.Scene({triggerElement: "#dogegroupwrapper", duration: 150, offset: 200})
          .setTween(dogeIntenseTween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);dogeIntenseTween

  var owl2Scene = new ScrollMagic.Scene({triggerElement: "#owlwrapper", duration: 90, offset: 100})
          .setTween(owl2Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var owl3Scene = new ScrollMagic.Scene({triggerElement: "#owlwrapper", duration: 90, offset: 200})
          .setTween(owl3Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var owl4Scene = new ScrollMagic.Scene({triggerElement: "#owlwrapper", duration: 90, offset: 300})
          .setTween(owl4Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var owl5Scene = new ScrollMagic.Scene({triggerElement: "#owlwrapper", duration: 90, offset: 400})
          .setTween(owl5Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);

  var situation2Scene = new ScrollMagic.Scene({triggerElement: "#situationwrapper", duration: 90, offset: 120})
          .setTween(situation2Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var situation3Scene = new ScrollMagic.Scene({triggerElement: "#situationwrapper", duration: 90, offset: 240})
          .setTween(situation3Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var situation4Scene = new ScrollMagic.Scene({triggerElement: "#situationwrapper", duration: 90, offset: 360})
          .setTween(situation4Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);

  var chinese2Scene = new ScrollMagic.Scene({triggerElement: "#chinesewrapper", duration: 100, offset: 100})
          .setTween(chinese2Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var chinese3Scene = new ScrollMagic.Scene({triggerElement: "#chinesewrapper", duration: 100, offset: 200})
          .setTween(chinese3Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);
  var chinese4Scene = new ScrollMagic.Scene({triggerElement: "#chinesewrapper", duration: 100, offset: 300})
          .setTween(chinese4Tween)
          // .addIndicators(true) // add indicators (requires plugin)
          .addTo(controller);





// begin ticker animation
      var $tickerWrapper = $(".tickerwrapper");
      var $list = $tickerWrapper.find("ul.list");
      var $clonedList = $list.clone();
      var listWidth = 10;

      $list.find("li").each(function (i) {
                  listWidth += $(this, i).outerWidth(true);
      });

      var endPos = $tickerWrapper.width() - listWidth;

      $list.add($clonedList).css({
          "width" : listWidth + "px"
      });

      $clonedList.addClass("cloned").appendTo($tickerWrapper);

      //TimelineMax
      var infinite = new TimelineMax({repeat: -1, paused: true});
      var time = 50;

      infinite
        .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
        .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
        .set($list, {force3D:true, rotation:0.01, x: listWidth})
        .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
        .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
        .progress(1).progress(0)
        .play();
// end ticker animation

// begin overlay functions
function earlyMemeOverlayOn() {
  document.getElementById("earlymeme-outer").style.display = "block";
}
function earlyMemeOverlayOff() {
  document.getElementById("earlymeme-outer").style.display = "none";
}

function photoshopOverlayOn() {
  document.getElementById("photoshop-outer").style.display = "block";
}
function photoshopOverlayOff() {
  document.getElementById("photoshop-outer").style.display = "none";
}

function deepfriedOverlayOn() {
  document.getElementById("deepfried-outer").style.display = "block";
}
function deepfriedOverlayOff() {
  document.getElementById("deepfried-outer").style.display = "none";
}

function photofadsOverlayOn() {
  document.getElementById("photofads-outer").style.display = "block";
}
function photofadsOverlayOff() {
  document.getElementById("photofads-outer").style.display = "none";
}

function imageMacrosOverlayOn() {
  document.getElementById("imagemacros-outer").style.display = "block";
}
function imageMacrosOverlayOff() {
  document.getElementById("imagemacros-outer").style.display = "none";
}
// end overlay functions


console.log("visualEssay working")
