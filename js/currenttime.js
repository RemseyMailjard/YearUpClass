function updateClock() {
  var now = new Date();

  // Define time zone options
  var optionsNetherlands = { timeZone: "Europe/Amsterdam", hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  var optionsPhoenix = { timeZone: "America/Phoenix", hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  // Format the time based on time zones
  var netherlandsTime = new Intl.DateTimeFormat('en-GB', optionsNetherlands).format(now);
  var phoenixTime = new Intl.DateTimeFormat('en-US', optionsPhoenix).format(now);

  // Update HTML elements with the formatted time
  document.getElementById("netherlandsTime").textContent = netherlandsTime;
  document.getElementById("phoenixTime").textContent = phoenixTime;

  // Call the countdown function to display the remaining days
  updateCountdown(now);

  // Refresh the clock every second
  setTimeout(updateClock, 1000);
}

function updateCountdown(currentTime) {
  const targetDate = new Date(currentTime.getFullYear(), 11, 20); // December 20
  const timeDifference = targetDate - currentTime;

  if (timeDifference > 0) {
    const totalDaysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    let weekdaysLeft = 0;
    let currentDate = new Date(currentTime);

    // Calculate weekdays left
    while (currentDate <= targetDate) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        weekdaysLeft++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const weeksLeft = Math.ceil(totalDaysLeft / 7);

    // Update the countdown display in the HTML
    document.getElementById(
      "countdown"
    ).textContent = `${totalDaysLeft} days, ${weekdaysLeft} weekdays, ${weeksLeft} weeks`;
  } else {
    document.getElementById("countdown").textContent = "The date has passed";
  }
}

function setup() {
  updateClock(); // Start the clock
  window.addEventListener("unload", function () {
    console.log("Unloading the page...");
  });
}

// Initialize the clock on page load
window.onload = setup;
