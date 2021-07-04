const numberOfButtons = document.querySelectorAll(".set .drum").length;

function playSound(url) {
  const sound = new Audio(url);
  sound.play();
}

function soundMaker(key) {
  switch (key) {
    case "w":
      playSound(`sounds/tom-1.mp3`);
      break;
    case "a":
      playSound(`sounds/tom-2.mp3`);
      break;
    case "s":
      playSound(`sounds/tom-3.mp3`);
      break;
    case "d":
      playSound(`sounds/tom-4.mp3`);
      break;
    case "j":
      playSound(`sounds/crash.mp3`);
      break;
    case "k":
      playSound(`sounds/kick-bass.mp3`);
      break;
    case "l":
      playSound(`sounds/snare.mp3`);
      break;
  }
}

function btnAnimation(key) {
  const activeBtn = document.querySelector(`.${key}`);
  activeBtn.classList.toggle("pressed");
  setTimeout(function () {
    activeBtn.classList.toggle("pressed");
  }, 150);
}

for (let i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".set .drum")
    [i].addEventListener("click", function (e) {
      soundMaker(e.target.innerHTML);
      btnAnimation(e.target.innerHTML);
    });
}

document.addEventListener("keydown", function (e) {
  soundMaker(e.key);
  btnAnimation(e.key);
});
