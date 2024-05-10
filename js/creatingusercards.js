document.addEventListener("DOMContentLoaded", function () {
  const userCardsContainer = document.getElementById("user-cards");
  const nameFilterInput = document.getElementById("nameFilter");
  const searchButton = document.getElementById("searchButton");
  const sortAscButton = document.getElementById("sortAsc");
  const sortDescButton = document.getElementById("sortDesc");
  const sortAscPointButton = document.getElementById("sortWorkingOn");
  const sortDescPointButton = document.getElementById("sortLowest");

  function sortByNameAsc(users) {
    return users.sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortByNameDesc(users) {
    return users.sort((a, b) => b.name.localeCompare(a.name));
  }

  function sortByPointAsc(users) {
    return users.sort((a, b) => a.currentlyWorkingOn - b.currentlyWorkingOn);
  }

  function sortByPointDesc(users) {
    return users.sort((a, b) => b.currentlyWorkingOn - a.currentlyWorkingOn);
  }

  function createUserCards(users, sortOrder) {
    userCardsContainer.innerHTML = ""; // Clear existing cards

    switch (sortOrder) {
      case "asc":
        users = sortByNameAsc(users);
        break;
      case "desc":
        users = sortByNameDesc(users);
        break;
      case "pointsasc":
        users = sortByPointAsc(users);
        break;
      case "pointsdesc":
        users = sortByPointDesc(users);
        break;
    }

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="card">
          <img src="${user.imageurl}" class="card-img-top" alt="Profile image of ${user.name}">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.nickname}</p>
            <p class="card-text"><strong>XP Points:</strong> ${user.xp}</p>
            <p class="card-text"><strong>Currently Working On:</strong> ${user.currentlyWorkingOn}</p>
            <a href="${user.github}" target="_blank" class="btn btn-success">GitHub</a>
            <a href="${user.linkedin}" target="_blank" class="btn btn-danger">Website</a>
            <a href="${user.linkedin}" target="_blank" class="btn btn-info">LinkedIn</a>
            <a href="mailto:${user.email}?subject=Hi%20${user.name}&body=Hi%20${user.name}" class="btn btn-primary"><i class="bi bi-envelope"></i> Email</a>
          </div>
        </div>`;
      userCardsContainer.appendChild(card);
    });
  }

  sortAscButton.addEventListener("click", function () {
    createUserCards(students, "asc");
  });

  sortDescButton.addEventListener("click", function () {
    createUserCards(students, "desc");
  });

  sortAscPointButton.addEventListener("click", function () {
    createUserCards(students, "pointsasc");
  });

  sortDescPointButton.addEventListener("click", function () {
    createUserCards(students, "pointsdesc");
  });

  function updateXP(students) {
    students.forEach((student) => {
      let pageNumber = parseInt(student.currentlyWorkingOn);
      student.xp = !isNaN(pageNumber) ? 10 * Math.pow(2, pageNumber) : 0;
    });
  }

  function filterUsers() {
    const filterValue = nameFilterInput.value.toLowerCase();
    const filteredData = students.filter(
      (student) =>
        student.name.toLowerCase().includes(filterValue) ||
        student.nickname.toLowerCase().includes(filterValue) ||
        student.group.toLowerCase().includes(filterValue)
    );
    createUserCards(filteredData, "asc");
  }

  updateXP(students);
  createUserCards(students, "asc");

  searchButton.addEventListener("click", filterUsers);
  nameFilterInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      filterUsers();
    }
  });
});
