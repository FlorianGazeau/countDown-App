setInterval(getDiffDate, 1000)

function getDiffDate () {

  const startDate = new Date()

  const endDate = new Date(2020, 11, 25)
  // get total seconds between the times
  var delta = Math.abs(endDate - startDate) / 1000;
  
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  
  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  var seconds = Math.trunc(delta % 60);
  
  if(hours < 10) {
    hours = "0" + hours
  }
  
  if (days < 10) {
    days = "0" + days
  }
  
  if (minutes < 10) {
    minutes = "0" + minutes
  }

  if (seconds < 10) {
    seconds = "0" + seconds
  }

  document.getElementById('day').innerText = days;
  document.getElementById('hour').innerText = hours;
  document.getElementById('minute').innerText = minutes;
  document.getElementById('second').innerText = seconds;

}