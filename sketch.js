let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
let playButton, stopButton, answerButton;
let player, fileName, fSize;

function preload() {
  sound1 = loadSound('assets/Drums_1-1.wav');
  sound2 = loadSound('assets/Drums_1.5-1.wav');
  sound3 = loadSound('assets/Drums_5-1.wav');
  sound4 = loadSound('assets/Drums_20-1.wav');
  sound5 = loadSound('assets/Vox_1-1.wav');
  sound6 = loadSound('assets/Vox_1.5-1.wav');
  sound7 = loadSound('assets/Vox_5-1.wav');
  sound8 = loadSound('assets/Vox_20-1.wav');
}

function setup(){  
  createCanvas(windowWidth, windowHeight);
  background(0);

  fSize = width / 10;
  textAlign(CENTER);
  fill(255);

  // Title
  let titleSize = fSize / 2;
  textSize(titleSize);
  text("Compression Ratio Practice", width / 2, height / 9);

  // Subtitle
  let subtitleSize = fSize / 4;
  textSize(subtitleSize);
  let lineSpacing = subtitleSize * 1.5; // spacing between title and subtitle
  text("1:1, 1.5:1, 5:1, 20:1", width / 2, height / 9 + lineSpacing);

  // choose first random sound
  chooseSound();

  // Button sizing + layout
  let btnW = width * 0.25;   // 25% of canvas width
  let btnH = 60;             // fixed button height
  let buttonYStart = height / 3; // start 1/3 down from top

  // PLAY button
  playButton = createButton('PLAY');
  playButton.size(btnW, btnH);
  playButton.position(width/2 - btnW/2, buttonYStart);
  playButton.style('font-size', '20px');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');  
  playButton.mousePressed(togglePlay);

  // STOP button
  stopButton = createButton('STOP');
  stopButton.size(btnW, btnH);
  stopButton.position(width/2 - btnW/2, buttonYStart + btnH + 20);
  stopButton.style('font-size', '20px');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.mousePressed(stopSound);

  // ANSWER button
  answerButton = createButton('ANSWER');
  answerButton.size(btnW, btnH);
  answerButton.position(width/2 - btnW/2, buttonYStart + (btnH + 20) * 2);
  answerButton.style('font-size', '20px');
  answerButton.style('background-color','#03A9F4');
  answerButton.style('color','#000000');  
  answerButton.mousePressed(showAnswer);
}

function togglePlay() {
  if (player && player.isPlaying()) {
    // player.pause(); // optional if you want pause functionality
  } else {
    chooseSound();
    player.amp(0.8);
    player.loop();
    // reset the button text every time play is pressed
    answerButton.html("ANSWER");
  }
}

function stopSound(){
  if (player) player.stop();
}

function showAnswer() {
  // reveal the description when clicked
  answerButton.html(fileName);
}

let lastChoice = -1;
let secondLastChoice = -1;

function chooseSound() {
  let choice;

  do {
    choice = int(random(8));  // 0–7
  } while (choice === lastChoice && choice === secondLastChoice);

  // update the tracking variables
  secondLastChoice = lastChoice;
  lastChoice = choice;

  // assign player and fileName
  if (choice === 0) {
    player = sound1; fileName = "1:1";
  } else if (choice === 1) {
    player = sound2; fileName = "1.5:1";
  } else if (choice === 2) {
    player = sound3; fileName = "5:1";
  } else if (choice === 3) {
    player = sound4; fileName = "20:1";
  } else if (choice === 4) {
    player = sound5; fileName = "1:1";
  } else if (choice === 5) {
    player = sound6; fileName = "1.5:1";
  } else if (choice === 6) {
    player = sound7; fileName = "5:1";
  } else {
    player = sound8; fileName = "20:1";
  }
}

