"use strict";

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);

  //   Stop the function.
  if (!audio) return;

  //   Rewinds to start. If not rewind, then have to wait for soundclip end before the same sound can be played.
  audio.currentTime = 0;

  //   Play audio when hitting the key that is associated.
  audio.play();

  //   If key gets pressed, adds new style.
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  key.classList.add("playing");

  //   Removes style when the transition has ended.
  key.addEventListener("transitionend", (e) => {
    e.target.classList.remove("playing");
  });
});
