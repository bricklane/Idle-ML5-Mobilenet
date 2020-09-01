//using objectclassifier
let vid;

function preload() {
  classifier = ml5.imageClassifier('MobileNet')
  vid = createVideo("Clouds3.mp4");
  vid.addClass('video_class');
  vid.loop()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  label = createDiv('label');  
  label.addClass('label_class');
  confidence = createDiv('Confidence: ...');
  confidence.addClass('confidence_class');
  //frameRate(1);
  classifyVideo();
  image(vid, 0, 0);
}

function classifyVideo() {
  classifier.classify(vid, gotResult);
}

function draw() {
    //console.log(frameCount); 
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


// ref: https://creative-coding.decontextualize.com/video/
// ref2: https://codepen.io/bricklane/pen/4a644d6ba54e9fd7d4c767c9489e9642
//ref 3 https://editor.p5js.org/ml5/sketches/ImageClassification_DoodleNet_Video
