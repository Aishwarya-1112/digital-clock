let ampm = document.getElementById("ampm");

function displayDate() {
  let displayDate = new Date(); //we need date
  let hr = displayDate.getHours();
  let mins = displayDate.getMinutes();
  let sec = displayDate.getSeconds();

  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }
  document.getElementById("hours").innerHTML = zero(hr);
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("seconds").innerHTML = zero(sec);
}

function zero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayDate, 500);
