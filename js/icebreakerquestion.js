function generateIcebreaker() {
  const questions = [
    {
      category: "General",
      text: "What's your favorite way to unwind after a long day of coding?",
    },
    {
      category: "General",
      text: "What hobby would you get into if time and money weren't an issue?",
    },
    {
      category: "General",
      text: "What's the last book you read or movie you watched that you really enjoyed?",
    },
    {
      category: "General",
      text: "If you could visit any country in the world, where would you go and why?",
    },
    {
      category: "General",
      text: "What's one skill you'd like to develop or hobby you'd like to take up?",
    },
    {
      category: "General",
      text: "What's the most memorable vacation you've ever had?",
    },
    {
      category: "General",
      text: "If you could have dinner with any historical figure, who would it be and why?",
    },
    {
      category: "General",
      text: "What's your favorite season of the year and why?",
    },
    { category: "General", text: "What’s your favorite dish to cook or eat?" },
    {
      category: "General",
      text: "If you could instantly become an expert in something, what would it be?",
    },
    {
      category: "General",
      text: "What's one book you think everyone should read?",
    },
    {
      category: "General",
      text: "What's a skill you learned when you were younger that you still use today?",
    },
    {
      category: "General",
      text: "What’s the most interesting documentary you've ever seen?",
    },
    {
      category: "General",
      text: "If you had to choose only one app on your phone, which one would it be?",
    },
    { category: "General", text: "What’s your go-to karaoke song?" },
    {
      category: "General",
      text: "If you could be any animal for a day, which one would you be and why?",
    },
    {
      category: "General",
      text: "What's your favorite memory from childhood?",
    },
    {
      category: "General",
      text: "What's something you've done that you're really proud of?",
    },
    {
      category: "General",
      text: "What's one goal you have for the next year?",
    },
    {
      category: "General",
      text: "What's a piece of advice you've received that has stuck with you?",
    },
    {
      category: "General",
      text: "What fictional character do you wish you could meet in real life?",
    },
    {
      category: "General",
      text: "What’s one city you’ve visited that surprised you the most?",
    },
    {
      category: "General",
      text: "What’s your favorite way to spend a weekend?",
    },
    {
      category: "General",
      text: "What's the best concert or live event you’ve ever attended?",
    },
    {
      category: "General",
      text: "What’s one language you wish you could speak fluently?",
    },
    { category: "General", text: "What’s the best gift you’ve ever received?" },
    { category: "General", text: "What’s the last thing you created?" },
    { category: "General", text: "What’s your favorite quote or saying?" },
    {
      category: "General",
      text: "What’s one thing you’re excited about that’s coming up in 2023?",
    },
    {
      category: "General",
      text: "If you could master one musical instrument, what would it be?",
    },
    {
      category: "General",
      text: "What’s the funniest thing that happened to you recently?",
    },
    { category: "General", text: "What’s your favorite tradition or holiday?" },
    {
      category: "General",
      text: "If you could switch lives with one person for a day, who would it be?",
    },
    {
      category: "General",
      text: "What’s something you used to do as a child that you miss?",
    },
    {
      category: "General",
      text: "What’s the most daring experience you’ve ever had?",
    },
    {
      category: "General",
      text: "If you could learn any skill in an instant, what would it be?",
    },
    {
      category: "General",
      text: "What's something you've always wanted to try but haven't yet?",
    },
    {
      category: "General",
      text: "What’s your favorite board game or card game?",
    },
    { category: "General", text: "Who’s someone you really admire?" },
    {
      category: "General",
      text: "What’s a common misconception about your job or hobby?",
    },
    {
      category: "Standup",
      text: "Was there any moment you will smile back at in a breakout room telling your family about your day etc?",
    },
    { category: "Standup", text: "What was one success you had yesterday?" },
    {
      category: "Standup",
      text: "What is something you are still struggling with today?",
    },
    {
      category: "First Day",
      text: "July 4th just passed... Did you shoot fireworks, watch a fireworks show, or do something else?",
    },
    {
      category: "First Day",
      text: "What did you stock up on or do over the weekend to make this week easier?",
    },
    {
      category: "First Day",
      text: "Pick a word to describe how you feel today? (ex: excited, nervous, sleepy, ready, confused, eager, etc.)",
    },
    { category: "Capstone", text: "What do you hope to accomplish today?" },
    {
      category: "Capstone",
      text: "What are your blockers (what might stop you)? If needed, can anyone help?",
    },
    {
      category: "Workshop",
      text: "What is one thing you figured out on your own during the workshop last Thursday/Friday?",
    },
    {
      category: "Workshop",
      text: "Shout outs! Did you learn something neat from someone else last week? If so, what and from whom?",
    },
    {
      category: "End of Program",
      text: "Pick a word to describe how you feel today? Do you remember what word you used on day 1?",
    },
    {
      category: "End of Program",
      text: "Is there any moment from HartCode you will smile back a few months from now? If so, what? (Ex: something in a breakout room? Telling your family about your day? Etc.)",
    },
    {
      category: "End of Program",
      text: "What's next? A vacation? Straight to the new role? Sleep?",
    },
    { category: "Food", text: "What is your favorite breakfast meal?" },
    {
      category: "Food",
      text: "What’s your caffeinated beverage of choice? Coffee? Tea? Cola - which one?",
    },
    { category: "Food", text: "What’s your favorite sandwich and why?" },
    {
      category: "Food",
      text: "What is your favorite ice cream flavor and ice cream topping?",
    },
    { category: "Food", text: "What's your favorite meal to cook and why?" },
    { category: "Food", text: "What food could you NOT live without?" },
    {
      category: "Food",
      text: "You are at the movie theater. What do you get -- popcorn, pickle, or M&Ms?",
    },
    {
      category: "Food",
      text: "What are you making for dinner tonight if you have to eat it every night for the next 7 days?",
    },
    {
      category: "Food",
      text: "Your company keeps snacks at work. What's the one snack you ask them to include?",
    },
    {
      category: "Food",
      text: "It's Taco Tuesday. What kind of taco are you eating?",
    },
    { category: "Food", text: "What is your favorite midnight snack?" },
    { category: "Food", text: "What’s the weirdest food you’ve ever eaten?" },
    {
      category: "Food",
      text: "If you had to pick only one of the following to eat every night for a year, which would you pick - American breakfast, Pho, Fajitas, Curry, or a burger?",
    },
    { category: "About You", text: "What was your favorite toy growing up?" },
    {
      category: "About You",
      text: "What was one of your favorite things to do as a kid?",
    },
    { category: "About You", text: "What is your cellphone wallpaper?" },
    {
      category: "About You",
      text: "What would you rather incorporate in your life: dog, cat, plant, or pet rock?",
    },
    { category: "About You", text: "Are you an early bird or night owl?" },
    {
      category: "About You",
      text: "What is your favorite time of the day and why?",
    },
    {
      category: "About You",
      text: "What’s your favorite tradition or holiday?",
    },
    { category: "About You", text: "What's your most used emoji?" },
    { category: "About You", text: "What’s your best scar story?" },
    { category: "About You", text: "What is the strangest habit you have?" },
    { category: "About You", text: "What is your hidden talent?" },
    { category: "About You", text: "What shoes do you have on right now?" },
    {
      category: "About You",
      text: "Did you have a locker in high school? Do you remember its number? And did you carry your books around in a backpack, stacked on a notebook, did you have no books?",
    },
    {
      category: "About You",
      text: "If you had a choice - would you play sports or play a musical instrument? Which instrument/sport and why?",
    },
    {
      category: "About You",
      text: "What is something you hate that other people love?",
    },
    { category: "About You", text: "What was the worst job you ever had?" },
    {
      category: "About You",
      text: "As a child, what did you want to be when you grew up?",
    },
    {
      category: "About You",
      text: "What current fact about your life would most impress your five-year-old self?",
    },
    {
      category: "About You",
      text: "What’s the most embarrassing fashion trend you used to rock?",
    },
    {
      category: "About You",
      text: "What was the last thing you bought at a store?",
    },
    {
      category: "About You",
      text: "What did you name your first car? Does your current car have a name? What is it?",
    },
    {
      category: "About You",
      text: "You have every TV show ever made available at your fingertips… what is the first thing you watch?",
    },
    {
      category: "About You",
      text: "If you and I were going to play card or board games this weekend, what would you want us to play?",
    },
    {
      category: "About You",
      text: "If I come to visit, what's the one local place you would take me to?",
    },
    {
      category: "About You",
      text: "What’s the last movie or TV show you watched or binge-watched?",
    },
    {
      category: "About You",
      text: "What movie do you think everyone should watch this weekend?",
    },
    {
      category: "About You",
      text: "What is one TV show you think everyone should watch?",
    },
    {
      category: "About You",
      text: "What kid's cartoon show do you still enjoy?",
    },
    {
      category: "About You",
      text: "What movie have you watched over and over?",
    },
    {
      category: "About You",
      text: "What song or album could you listen to on repeat?",
    },
    {
      category: "About You",
      text: "What is one place that you really want to visit that you haven't been to yet?",
    },
    {
      category: "About You",
      text: "What’s your favorite place of all the places you’ve traveled?",
    },
    {
      category: "About You",
      text: "What's one place you've always wanted to travel to?",
    },
    { category: "About You", text: "Who is your favorite villain?" },
    {
      category: "About You",
      text: "What’s the most out-of-character thing you’ve ever done?",
    },
    {
      category: "About You",
      text: "Have you ever completed anything on your 'bucket list'?",
    },
    {
      category: "About You",
      text: "What's the most amazing thing you've seen in nature?",
    },
    { category: "About You", text: "How do you relieve stress and anxiety?" },
    { category: "About You", text: "What's your weirdest dream ever?" },
    {
      category: "About You",
      text: "Which do you prefer - ocean, lake, pool, or slip-n-slide?",
    },
    {
      category: "About You",
      text: "Are you a planner or are you spontaneous?",
    },
    {
      category: "About You",
      text: "Have you ever met someone famous in person? If so, who?",
    },
    {
      category: "About You",
      text: "Halloween - dress up and go out, hand out candy, turn off the lights and hide? What is your tradition? (Also…Best costume?)",
    },
    {
      category: "If You",
      text: "If you could learn one new personal skill, what would it be?",
    },
    {
      category: "If You",
      text: "If you had a million dollars, what would you buy first?",
    },
    {
      category: "If You",
      text: "If you could donate a million dollars to any charity, what cause would you choose?",
    },
    {
      category: "If You",
      text: "If you could build your dream house, what one cool quirky feature would you include?",
    },
    {
      category: "If You",
      text: "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
    },
    {
      category: "If You",
      text: "If you had your own late-night talk show, who do you invite as your first guest?",
    },
    {
      category: "If You",
      text: "If you were a superhero, what would your superhero name be?",
    },
    {
      category: "If You",
      text: "If the zombie apocalypse is coming, who are 3 people you want on your team?",
    },
    {
      category: "If You",
      text: "If you were a wrestler, what would be your entrance theme song?",
    },
    {
      category: "If You",
      text: "If you were stranded on a deserted island, would you rather be alone or be stuck there with your worst enemy? Which would you choose? Why?",
    },
    {
      category: "If You",
      text: "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
    },
    {
      category: "If You",
      text: "If you had a time machine, would you go back in time or into the future? Why?",
    },
    {
      category: "If You",
      text: "If you could get the answer to one 'question of life or history,' what would you want to know?",
    },
    {
      category: "If You",
      text: "If you are going to sail around the world, what will you name your boat?",
    },
    {
      category: "If You",
      text: "You are going to be transported into a TV or movie set -- what cast do you want to be a member of?",
    },
    {
      category: "If You",
      text: "If you become independently wealthy and don’t have to work, what will you do with your time?",
    },
    {
      category: "If You",
      text: "If you could live anywhere in the world for a year (without having to work), where would it be?",
    },
    {
      category: "If You",
      text: "You are going to compete on a reality or game show on TV. Which one would you choose and why?",
    },
    {
      category: "If You",
      text: "If you could hang out with any cartoon character, who would you choose and why?",
    },
    {
      category: "If You",
      text: "If you could switch lives with anyone for a day, who would it be?",
    },
    {
      category: "If You",
      text: "If you could bring back any fashion trend, what would it be?",
    },
    {
      category: "If You",
      text: "If you could choose any two famous people to have dinner with, who would they be?",
    },
    {
      category: "If You",
      text: "If you could be guaranteed one thing in life (besides money), what would it be?",
    },
    {
      category: "If You",
      text: "If you could add anyone to Mount Rushmore, who would it be and why?",
    },
    {
      category: "If You",
      text: "If you could compete in the summer Olympics, what sport would it be in?",
    },
    {
      category: "If You",
      text: "If you could teach a class on one thing, what would you teach?",
    },
    {
      category: "If You",
      text: "If you could eliminate one thing from your daily routine, what would it be and why?",
    },
    {
      category: "If You",
      text: "If you could have any superpower, what would it be?",
    },
    {
      category: "If You",
      text: "If your house was on fire and you could only grab three things, what would they be?",
    },
    {
      category: "If You",
      text: "If you had one opportunity to run a restaurant, what would you serve?",
    },
    {
      category: "If You",
      text: "If you could go back and re-live one high school moment, what would it be?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather teach 1st graders or high schoolers? Why?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather be a surgeon or an actor? Why?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather be a superhero or the world’s best chef?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather drive a Smart car, a Ford Mustang, a Jeep, or a crew cab pickup?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather lose all of your money or all of your pictures?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather visit a volcano or a rainforest?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather go camping up in the Rocky Mountains, rent a beach house by the ocean in Hawaii, or spend a holiday in the city of San Francisco?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather explore outer space or the bottom of the ocean?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather climb Mt. Everest or swim the English Channel? Why?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather water ski or snow ski? Why?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather spend a summer in the Saharan desert or a winter in Antarctica?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather backpack Europe or go on a (photo) African safari?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather spend a vacation riding horses in Montana, seeing the sights of Las Vegas, or sailing around the Caribbean in a yacht?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather spend a ride a rollercoaster or attend a jazz concert?",
    },
    {
      category: "Suggestions from Class",
      text: "Do the '6 word memoir' challenge as standup - tell a 'story' about yourself in only 6 words",
    },
    {
      category: "Would You Rather",
      text: "Would you rather spend a ride a rollercoaster or attend a jazz concert?",
    },
    {
      category: "Suggestions from Class",
      text: "Do the '6 word memoir' challenge as standup - tell a 'story' about yourself in only 6 words",
    },
    {
      category: "Suggestions from Class",
      text: "What is your dream car and why?",
    },
    {
      category: "Suggestions from Class",
      text: "If a zombie apocalypse started today where would you go for safety?",
    },
    {
      category: "Suggestions from Class",
      text: "What are your Top 3 favorite TV shows?",
    },
    {
      category: "Suggestions from Class",
      text: "Come up with 5 words to describe your ideal future?",
    },
    {
      category: "Suggestions from Class",
      text: "What is a passion project website you would like to create once you feel like your skills are up to par? Tell us about some of the ideas and ambitions you have for it.",
    },
    {
      category: "Suggestions from Class",
      text: "Where do you see yourself after 10 years?",
    },
    {
      category: "Suggestions from Class",
      text: "What is one spot outside the US you've gotten a chance to travel to?, how was the experience?",
    },
    {
      category: "Would You Rather",
      text: "Would you rather always have to say everything on your mind or never be able to speak again?",
    },
    {
      category: "Suggestions from Class",
      text: "If you could make a silly or wacky invention, what would it be?",
    },
    {
      category: "Suggestions from Class",
      text: "What’s your go-to karaoke song?",
    },
    {
      category: "Suggestions from Class",
      text: "What superpower do you wish you had? Flying, disappearing, reading people's minds, and why?",
    },
    {
      category: "Suggestions from Class",
      text: "What is your favorite cereal? And is cereal a soup?",
    },
    {
      category: "Suggestions from Class",
      text: "What is your idea of happiness?",
    },
    {
      category: "About you",
      text: "What are your Top 3 favorite TV shows?",
    },
    {
      category: "Suggestions from Class",
      text: "What’s the worst piece of advice you’ve ever gotten?",
    },
    {
      category: "Suggestions from Class",
      text: "If I had to ask your best friend to describe you, what whould he or she say?",
    }
  ];

  const selectedCategory = document.getElementById("categorySelect").value;
  const filteredQuestions =
    selectedCategory === "all"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);
  const index = Math.floor(Math.random() * filteredQuestions.length);
  document.getElementById("displayQuestion").innerHTML =
    filteredQuestions[index].text;
}
