document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const saveImprovementButton = document.getElementById(
    "saveImprovementButton"
  );
  const userNameInput = document.getElementById("userName");

  saveButton.addEventListener("click", saveUserData);
  saveImprovementButton.addEventListener("click", saveImprovementData);
  userNameInput.addEventListener("input", loadUserData);

  function saveUserData() {
    const userName = userNameInput.value.trim();
    if (!userName) {
      alert("Please enter your name.");
      return;
    }

    const form = document.getElementById("skillsForm");
    const data = {};
    for (let input of form.elements) {
      if (input.type === "checkbox") {
        data[input.name] = data[input.name] || {};
        data[input.name][input.value] = input.checked;
      }
    }
    localStorage.setItem(userName + "_skillsProgress", JSON.stringify(data));
    alert("Progress saved for " + userName + "!");
  }

  function saveImprovementData() {
    const userName = userNameInput.value.trim();
    if (!userName) {
      alert("Please enter your name.");
      return;
    }

    const improvements = {
      html: document.getElementById("htmlImprovement").value,
      css: document.getElementById("cssImprovement").value,
      js: document.getElementById("jsImprovement").value,
      bootstrap: document.getElementById("bootstrapImprovement").value,
    };
    localStorage.setItem(
      userName + "_improvementAreas",
      JSON.stringify(improvements)
    );
    alert("Improvement areas saved for " + userName + "!");
  }

  function loadUserData() {
    const userName = userNameInput.value.trim();
    if (!userName) return;

    // Load skills progress
    const savedData = JSON.parse(
      localStorage.getItem(userName + "_skillsProgress")
    );
    if (savedData) {
      const form = document.getElementById("skillsForm");
      for (let input of form.elements) {
        if (input.type === "checkbox" && savedData[input.name]) {
          input.checked = !!savedData[input.name][input.value];
        }
      }
    }

    // Load improvement areas
    const savedImprovements = JSON.parse(
      localStorage.getItem(userName + "_improvementAreas")
    );
    if (savedImprovements) {
      document.getElementById("htmlImprovement").value =
        savedImprovements.html || "";
      document.getElementById("cssImprovement").value =
        savedImprovements.css || "";
      document.getElementById("jsImprovement").value =
        savedImprovements.js || "";
      document.getElementById("bootstrapImprovement").value =
        savedImprovements.bootstrap || "";
    }
  }

  // Load user data immediately when the page loads
  loadUserData();
});
