function updateClock() {
  var now = new Date();

  // Create an options object to specify the time zones for Netherlands and Phoenix
  var optionsNetherlands = { timeZone: "Europe/Amsterdam", hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  var optionsPhoenix = { timeZone: "America/Phoenix", hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  // Format the time based on the specified time zones
  var netherlandsTime = new Intl.DateTimeFormat('en-GB', optionsNetherlands).format(now);
  var phoenixTime = new Intl.DateTimeFormat('en-US', optionsPhoenix).format(now);

  // Update HTML elements with the formatted time
  document.getElementById("netherlandsTime").textContent = netherlandsTime;
  document.getElementById("phoenixTime").textContent = phoenixTime;

  // Call the countdown function to update the countdown display
  updateCountdown(now);

  // Refresh the clock every second
  setTimeout(updateClock, 1000);
}

function updateCountdown(currentTime) {
  // Set target date to December 20 of the current year
  const targetDate = new Date(currentTime.getFullYear(), 11, 20); // December is month 11

  // Calculate the difference between the current time and the target date
  const timeDifference = targetDate - currentTime;

  if (timeDifference > 0) {
    const totalDaysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let weekdaysLeft = 0;
    let currentDate = new Date(currentTime);

    // Loop to count weekdays only
    while (currentDate <= targetDate) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclude Sundays (0) and Saturdays (6)
        weekdaysLeft++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const weeksLeft = Math.ceil(totalDaysLeft / 7);

    document.getElementById(
      "countdown"
    ).textContent = `${totalDaysLeft} day(s), ${weekdaysLeft} weekday(s), and ${weeksLeft} week(s) left in the academy`;
  } else {
    document.getElementById("countdown").textContent = "The date has passed";
  }
}

function setup() {
  updateClock(); // Start the clock
  window.addEventListener("unload", function () {
    console.log("Unloading the page...");
    // Any additional cleanup tasks can be added here
  });
}

// Call the setup function when the page loads
window.onload = setup;
