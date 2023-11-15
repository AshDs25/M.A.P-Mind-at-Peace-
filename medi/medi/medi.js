
const song = document.getElementById("song");
const song1= document.getElementById("song1");
const song2 = document.getElementById("song2");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song1.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song1);
  });
});

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song2.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song2);
  });
});
// song.addEventListener("click", function() {
//   checkPlaying(song);
// });
play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
  });

  play.addEventListener("click", function() {
    checkPlaying1(song1);
  });
  
  replay.addEventListener("click", function() {
      restartSong1(song1);
      
    });
    
    play.addEventListener("click", function() {
      checkPlaying2(song2);
    });
    
    replay.addEventListener("click", function() {
        restartSong2(song2);
        
      });

const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

const restartSong1 = song1 =>{
  let currentTime = song1.currentTime;
  song1.currentTime = 0;
  console.log("ciao")

}

const restartSong2 = song2 =>{
  let currentTime = song2.currentTime;
  song2.currentTime = 0;
  console.log("ciao")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});
// play pause icon
const checkPlaying1 = song1 => {
  if (song1.paused) {
    song1.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song1.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};
const checkPlaying2 = song2 => {
  if (song2.paused) {
    song2.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song2.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};


song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
song1.ontimeupdate = function() {
  let currentTime = song1.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song1.pause();
    song1.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
song2.ontimeupdate = function() {
  let currentTime = song2.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song2.pause();
    song2.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};


