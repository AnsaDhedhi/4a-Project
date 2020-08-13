var sceneryFrames = [
    { transform: 'translateX(100%)'},
    { transform: 'translateX(-100%)'}
];
var cloudsFrames = [
    { transform: 'translateX(100%)'},
    { transform: 'translateX(-100%)'}
];
var BirdsFrames = [
    { transform: 'translateX(500%)'},
    { transform: 'translateX(-400%)'}
];
var Cloud1Frames = [
    { transform: 'translateX(200%)'},
    { transform: 'translateX(-400%)'}
];
var Birds3Frames = [
    // { transform: 'translateX(-400%)'},
    // { transform: 'translateX(1550%)'}
    { transform: 'translateX(1550%)'},
    { transform: 'translateX(-800%)'}
];

var sceneryTiming = {
    duration:50000,
    iterations: Infinity,
    playbackRate: 2
};
var BTiming = {
    duration:30000,
    iterations: Infinity,
    playbackRate: 2
};
var CloudsTiming = {
    duration:36000,
    iterations: Infinity,
    playbackRate: -3
};
document.getElementById("birds1");

var backgroundMovement = birds1.animate(BirdsFrames,BTiming);
backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration/2

document.getElementById("cloud1");
var backgroundMovement2 = cloud1.animate(Cloud1Frames,CloudsTiming);
backgroundMovement2.currentTime = backgroundMovement.effect.getTiming().duration/2

document.getElementById("clouds2");
var backgroundMovement3 = clouds2.animate(cloudsFrames,CloudsTiming);
backgroundMovement3.currentTime = backgroundMovement.effect.getTiming().duration/2

document.getElementById("bird3gif");
var backgroundMovement4 = bird3gif.animate(Birds3Frames,sceneryTiming);
backgroundMovement4.currentTime = backgroundMovement.effect.getTiming().duration/2

document.getElementById("bird2gif");
var backgroundMovement5 = bird2gif.animate(Birds3Frames,sceneryTiming);
backgroundMovement5.currentTime = backgroundMovement.effect.getTiming().duration/2


//faster function
var flyFaster = function() {
    backgroundMovement.playbackRate += 1.1
}
var flyFaster2 = function() {
    backgroundMovement2.playbackRate += 1.1
}
var flyFaster3 = function() {
    backgroundMovement3.playbackRate += 1.1
}
var flyFaster4 = function() {
    backgroundMovement4.playbackRate += 1
}
var flyFaster5 = function() {
    backgroundMovement5.playbackRate += 1
}

document.addEventListener("click",flyFaster);
document.addEventListener("click",flyFaster2);
document.addEventListener("click",flyFaster3);
document.addEventListener("click",flyFaster4);
document.addEventListener("click",flyFaster5);
//slowdown function
setInterval ( function(){
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .9
    }
},3000)
setInterval ( function(){
    if (backgroundMovement2.playbackRate > 0.4) {
        backgroundMovement2.playbackRate *= .9
    }
},3000)
setInterval ( function(){
    if (backgroundMovement3.playbackRate > 0.4) {
        backgroundMovement3.playbackRate *= .9
    }
},3000)
setInterval ( function(){
    if (backgroundMovement4.playbackRate > 0.4) {
        backgroundMovement4.playbackRate *= .9
    }
},3000)
setInterval ( function(){
    if (backgroundMovement5.playbackRate > 0.4) {
        backgroundMovement5.playbackRate *= .9
    }
},3000)
