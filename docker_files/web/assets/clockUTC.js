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

  document.getElementById("dayL").innerHTML = days[curr.getUTCDay()];
  document.getElementById("dayS").innerHTML = days[curr.getUTCDay()].substring(0,3);
  document.getElementById("dd").innerHTML = twoDigit(curr.getUTCDate());
  document.getElementById("mm").innerHTML = twoDigit(curr.getUTCMonth()+1);
  document.getElementById("monthL").innerHTML = months[curr.getUTCMonth()];
  document.getElementById("monthS").innerHTML = months[curr.getUTCMonth()].substring(0,3);
  document.getElementById("yyyy").innerHTML = curr.getUTCFullYear().toString();
  document.getElementById("yy").innerHTML = curr.getUTCFullYear().toString().substring(2);
  document.getElementById("hh24").innerHTML = twoDigit(curr.getUTCHours());
  document.getElementById("hh12").innerHTML = twoDigit(gethh12(curr.getUTCHours()));
  document.getElementById("ampm").innerHTML = getampm(curr.getUTCHours());
  document.getElementById("hrs").innerHTML = "Hrs";
  document.getElementById("mi").innerHTML = twoDigit(curr.getUTCMinutes());
  document.getElementById("ss").innerHTML = twoDigit(curr.getUTCSeconds());
  document.getElementById("ms").innerHTML = threeDigit(curr.getUTCMilliseconds());
  document.getElementById("utc").innerHTML = "UTC";
}

var x = 1;

setInterval("clock()", x);
