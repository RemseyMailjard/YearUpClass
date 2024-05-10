
let students = [
    {
      name: "Sabrina Robles",
      group: "App Dev Team",
      github: "https://github.com/SabrinaRobles",
      linkedin: "https://www.linkedin.com/in/sabrina-robles-231112170/",
      email: "sabrinatrobles22@gmail.com",
      nickname: "Sabri",
      imageurl:
        "https://ih1.redbubble.net/image.3753796206.6697/st,small,507x507-pad,600x600,f8f8f8.jpg",
      imageURLLinkedin:
        "https://media.licdn.com/dms/image/D5603AQFre02VzeThcA/profile-displayphoto-shrink_400_400/0/1711770747511?e=1720656000&v=beta&t=rwxNPYA9tZNxr735lItRNDmKenGq7ho06bQcRNLcSSg",
      gender: "female",
      devices: "windows",
      xp: 0,
      currentlyWorkingOn: 75
    },
    {
      name: "Brett Spokes",
      group: "App Dev Team",
      github: "https://github.com/BrettSpokes",
      linkedin: "https://www.linkedin.com/in/brett-spokes-8b758b29b/",
      email: "bspokes@appdev.yearup.org",
      nickname: "Any Key",
      imageurl:
        "https://media.licdn.com/dms/image/D4E03AQHsvMOXofd4eg/profile-displayphoto-shrink_800_800/0/1701278215042?e=1720656000&v=beta&t=W-I_I4aKUyVjcXNKc0lfkrP7ftWPD-fACwEE1NqLUlw",
      gender: "male",
      xp: 0,
      currentlyWorkingOn: 75
    }]

 
    let numbers = [10,2,4];
    numbers.sort(function(a, b){
        if (a < b) return -1; // right order
        else if (a == b) return 0;
        else return 1; // swap, wrong order
       });
    console.log(numbers);
    //scenario when you have need to sort an array of objects based on a string property (text)
   let sortedStudentlist = students.sort((a,b) => a.name.localeCompare(b.name));

    //scenario when you have need to sort an array of objects based on a integer property (text
   let sortbyPageWorkingon = student.sort((a,b) => a.currentlyWorkingOn - b.currentlyWorkingOn);
   console.log(sortedStudentlist);