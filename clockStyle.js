function disp(a, b) {
  var _a = document.getElementById(a);
  var _b = document.getElementById(b);
  if (_a.checked == true) {
    _b.style.display = "inline-block";
  } else {
    _b.style.display = "none";
  }
}

var _dayLong = document.getElementById("dayLong");
var _dayShort = document.getElementById("dayShort");
var _yearLong = document.getElementById("yearLong");
var _yearShort = document.getElementById("yearShort");
var _monthLong = document.getElementById("monthLong");
var _monthShort = document.getElementById("monthShort");
var _month2digit = document.getElementById("month2digit");
var _date = document.getElementById("date");
var _hour24 = document.getElementById("hour24");
var _hour12 = document.getElementById("hour12");
var _minutes = document.getElementById("minutes");
var _seconds = document.getElementById("seconds");
var _milliseconds = document.getElementById("milliseconds");
var _ampm = document.getElementById("ampm");
var _hrs = document.getElementById("hrs");

function showDay() {
  if(_dayLong.checked == true) {
    document.getElementById("dayL").style.display = "block";
    document.getElementById("dayS").style.display = "none";
  } else if (_dayShort.checked == true) {
    document.getElementById("dayL").style.display = "none";
    document.getElementById("dayS").style.display = "block";
  } else {
    document.getElementById("dayL").style.display = "none";
    document.getElementById("dayS").style.display = "none";
  }
}

function showYear() {
  if(_yearLong.checked == true) {
    document.getElementById("yyyy").style.display = "block";
    document.getElementById("yy").style.display = "none";
  } else if (_yearShort.checked == true) {
    document.getElementById("yyyy").style.display = "none";
    document.getElementById("yy").style.display = "block";
  } else {
    document.getElementById("yyyy").style.display = "none";
    document.getElementById("yy").style.display = "none";
  }
}

function showMonth() {
  if(_monthLong.checked == true) {
    document.getElementById("monthL").style.display = "block";
    document.getElementById("monthS").style.display = "none";
    document.getElementById("mm").style.display = "none";
  } else if (_monthShort.checked == true) {
    document.getElementById("monthL").style.display = "none";
    document.getElementById("monthS").style.display = "block";
    document.getElementById("mm").style.display = "none";
  } else if (_month2digit.checked == true) {
    document.getElementById("monthL").style.display = "none";
    document.getElementById("monthS").style.display = "none";
    document.getElementById("mm").style.display = "block";
  } else {
    document.getElementById("monthL").style.display = "none";
    document.getElementById("monthS").style.display = "none";
    document.getElementById("mm").style.display = "none";
  }
}

function showHour() {
  if(_hour24.checked == true) {
    document.getElementById("hh24").style.display = "block";
    document.getElementById("hrs").style.display = "block";
    document.getElementById("hh12").style.display = "none";
    document.getElementById("ampm").style.display = "none";
  } else if(_hour12.checked == true) {
    document.getElementById("hh24").style.display = "none";
    document.getElementById("hrs").style.display = "none";
    document.getElementById("hh12").style.display = "block";
    document.getElementById("ampm").style.display = "block";
  } else {
    document.getElementById("hh24").style.display = "none";
    document.getElementById("hrs").style.display = "none";
    document.getElementById("hh12").style.display = "none";
    document.getElementById("ampm").style.display = "none";
  }
}
