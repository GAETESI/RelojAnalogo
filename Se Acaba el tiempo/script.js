function moveClockHands() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var hourHand = document.getElementById("hour");
  var minuteHand = document.getElementById("minutes");
  var secondHand = document.getElementById("seconds");


  var hourAngle = (hour * 30) + (minute / 2);
  var minuteAngle = (minute * 6) + (second / 10);
  var secondAngle = second * 6;


  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
  secondHand.style.transform = "rotate(" + secondAngle + "deg)";
}

setInterval(moveClockHands, 1000);


