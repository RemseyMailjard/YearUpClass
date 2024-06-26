function updateClock() {
  var now = new Date();
  var phoenixTime = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() - 7,
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
  var netherlandsTime = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() + 2,
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
  var panamaTime = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() - 5,
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  document.getElementById("phoenixTime").textContent =
    phoenixTime.toLocaleTimeString();
  document.getElementById("panamaTime").textContent =
    panamaTime.toLocaleTimeString();

  // Adding the countdown display function
  updateCountdown(phoenixTime);

  setTimeout(updateClock, 1000);
}

function updateCountdown(phoenixTime) {
  const targetDate = new Date(phoenixTime.getFullYear(), 5, 28); // June 28th of the current year
  const timeDifference = targetDate - phoenixTime;

  if (timeDifference > 0) {
    const totalDaysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let weekdaysLeft = 0;
    let currentDate = new Date(phoenixTime);

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
