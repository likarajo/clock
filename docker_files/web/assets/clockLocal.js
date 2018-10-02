function twoDigit(n) {
  return n < 10 ? "0" + n : n;
}

function threeDigit(n) {
  return n < 100 ? n < 10 ? "00" + n : "0" + n : n ;
}

function gethh12(n) {
  return n < 13 ? n < 1 ? "12" : n : n-12 ;
}

function getampm(n) {
  return n < 12 ? "AM" : "PM";
}

var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

function clock() {
  var curr = new Date();

  document.getElementById("dayL").innerHTML = days[curr.getDay()];
  document.getElementById("dayS").innerHTML = days[curr.getDay()].substring(0,3);
  document.getElementById("dd").innerHTML = twoDigit(curr.getDate());
  document.getElementById("mm").innerHTML = twoDigit(curr.getMonth()+1);
  document.getElementById("monthL").innerHTML = months[curr.getMonth()];
  document.getElementById("monthS").innerHTML = months[curr.getMonth()].substring(0,3);
  document.getElementById("yyyy").innerHTML = curr.getFullYear().toString();
  document.getElementById("yy").innerHTML = curr.getFullYear().toString().substring(2);
  document.getElementById("hh24").innerHTML = twoDigit(curr.getHours());
  document.getElementById("hh12").innerHTML = twoDigit(gethh12(curr.getHours()));
  document.getElementById("ampm").innerHTML = getampm(curr.getHours());
  document.getElementById("hrs").innerHTML = "Hrs";
  document.getElementById("mi").innerHTML = twoDigit(curr.getMinutes());
  document.getElementById("ss").innerHTML = twoDigit(curr.getSeconds());
  document.getElementById("ms").innerHTML = threeDigit(curr.getMilliseconds());
  document.getElementById("local").innerHTML = "Local";
}

var x = 1;

setInterval("clock()", x);
