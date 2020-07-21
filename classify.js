//using objectclassifier
let vid;

function preload() {
  classifier = ml5.imageClassifier('MobileNet')
  vid = createVideo("clouds.mp4");
  vid.addClass('video_class');
  vid.loop();
  vid.parent('frame')
  //document.body.prepend(vid);
}


function setup() {
  createCanvas(0, 0);
  label = createDiv('label');  
  label.addClass('label_class');
  label.parent('caption');
  confidence = createDiv('Confidence: ...');
  confidence.addClass('confidence_class');
  confidence.parent('caption');
  //frameRate(1);
  classifyVideo();
  image(vid, 0, 0);
  vid.play();
}

function classifyVideo() {
  classifier.classify(vid, gotResult);
}

function draw() {
    console.log(frameCount); 
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  // Show the first label and confidence
  label.html( results[0].label);
  confidence.html(nf(results[0].confidence, 0, 2) + '%'); // Round the confidence to 0.01
  // Call classifyVideo again
  classifyVideo();
}


//ref: https://creative-coding.decontextualize.com/video/
//ref 2: https://codepen.io/bricklane/pen/4a644d6ba54e9fd7d4c767c9489e9642
//ref 3 https://editor.p5js.org/ml5/sketches/ImageClassification_DoodleNet_Video
//ref 4 CSS Shadow:  https://neumorphism.io/#e8e8e8