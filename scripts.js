/* Place your JavaScript in this file */
var minute = document.getElementById("minutes");
var hour = document.getElementById("hours");
var statusofclock = document.getElementById("status");
var starthour,
  startminute,
  initialminute,
  initialhour,
  id = null;

function resume() {
  minute.innerHTML = localStorage.getItem("savedminutes");
  hour.innerHTML = localStorage.getItem("savedhours");
  initialhour = localStorage.getItem("savedhours");
  initialminute = localStorage.getItem("savedminutes");
  var time = new Date();
  startminute = time.getMinutes();
  starthour = time.getHours();
  statusofclock.innerHTML = "running";
  id = setInterval(show, 60000);
}
function start() {
  localStorage.setItem("savedhours", 0);
  localStorage.setItem("savedminutes", 0);
  resume();
  statusofclock.innerHTML = "running1";
}
var stopminute, stophours;
function stop() {
  statusofclock.innerHTML = "paused";
  show();
  clearInterval(id);
}
function show() {
  let time = new Date();
  stopminute = time.getMinutes();
  stophours = time.getHours();
  var totalstudyminutes =
    (stophours - starthour) * 60 + (stopminute - startminute) + +initialminute;
  var numhours = Math.floor(totalstudyminutes / 60);
  totalstudyminutes = totalstudyminutes % 60;

  var totalstudyhours = numhours + +initialhour;
  minute.innerHTML = totalstudyminutes;
  hour.innerHTML = totalstudyhours;
  localStorage.setItem("savedhours", totalstudyhours);
  localStorage.setItem("savedminutes", totalstudyminutes);
}
