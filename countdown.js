function animateCountdown() {
  var countdownNumbers = document.getElementsByClassName("countdown-number");
  for (var i = 0; i < countdownNumbers.length; i++) {
    countdownNumbers[i].style.animationName = "rotate";
  }
}

// Set the date and time to countdown to (year, month index, day, hour, minute, second)
var countDownDate = new Date(2024, 4, 9, 12, 0, 0).getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the time difference between now and the countdown date
  var timeDiff = countDownDate - now;

  // Calculate time units
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished, display a message
  if (timeDiff < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown is over!";
  } else {
    animateCountdown();
  }
}, 1000);
