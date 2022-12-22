////////////////// All variables

let playing = false;
let ind_track = 0;
let player = document.querySelector(".player");

////////////////// Array with music and tracks details
let tracks = [
  {
    name: " Bleu laggon party",
    artist: "Ukulele man",
    image: "img/img1.jpg",
    path: "Music/blue_laggon.mp3",
  },
  {
    name: "Caribaba",
    artist: "Nice day",
    image: "img/img2.jpg",
    path: "Music/caribbean_dream.mp3",
  },
  {
    name: " Chill time",
    artist: "Hawaii man",
    image: "img/img3.jpg",
    path: "Music/old_hawaii.mp3",
  },
];

let track_img = document.querySelector(".img_art");
let track_name = document.querySelector(".name_track");
let track_art = document.querySelector(".name_art");
let now_playing = document.querySelector(".full_name");
let previus_btn = document.querySelector("#previus_btn");
let next_btn = document.querySelector("#next_btn");
let play_btn = document.querySelector("#play_btn");
let stop_btn = document.querySelector("#stop_btn");

///////////////// Event listeners////////////////////

document.addEventListener(
  "DOMContentLoaded",
  function () {
    start_player();
  },
  false
);

document.addEventListener("DOMContentLoaded", loadTrack(ind_track));

previus_btn.addEventListener("click", prevTrack);

next_btn.addEventListener("click", nextTrack);

play_btn.addEventListener("click", play_pause);

stop_btn.addEventListener("click", stop_aud);

document.querySelector("#change_vol").addEventListener("change", change_vol);
///////////////// Event listeners End////////////////////

function start_player() {
  player.controls = false;
}

function loadTrack(ind_track) {
  // Load a new track
  player.src = tracks[ind_track].path;
  player.load();
  console.log(player);

  // Update details of the track
  track_img.style.backgroundImage = "url(" + tracks[ind_track].image + ")";
  track_name.textContent = tracks[ind_track].name;
  track_art.textContent = tracks[ind_track].artist + " - ";

  // Move to the next track if the current finishes playing using the 'ended' event
  player.addEventListener("ended", nextTrack);
}

function change_vol() {
  player.volume = document.getElementById("change_vol").value;
}

function play_pause() {
  if (!playing) play_aud();
  else pause_aud();
}

function play_aud() {
  playing = true;
  player.play();
}

function pause_aud() {
  playing = false;
  player.pause();
}

function stop_aud() {
  playing = false;
  player.pause();
  player.currentTime = 0;
}

function nextTrack() {
  // Go back to the first track if the current one is the last in the track list
  if (ind_track <= 1) ++ind_track;
  else ind_track = 0;

  // Load and play the new track
  loadTrack(ind_track);
  play_aud();
}

function prevTrack() {
  // Go back to the last track if the current one is the first in the track list
  if (ind_track > 0) --ind_track;
  else ind_track = 2;

  // Load and play the new track
  loadTrack(ind_track);
  play_aud();
}
