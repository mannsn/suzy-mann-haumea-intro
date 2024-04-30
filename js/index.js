//Create a footer element
const aFooter = document.createElement("FOOTER");
aFooter.className = "footer";
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);
console.log(aFooter);

//Get the current year
var today = new Date();
var thisYear = today.getFullYear();
console.log(thisYear);

//Find the added footer element
var newFooter = document.querySelector("footer");
console.log(newFooter);

//Create the copyright
var aCopyright = document.createElement("P");
const copyrightSymbol = "\u00A9";
var copyrightText = copyrightSymbol + "Suzy Mann " + thisYear;
aCopyright.innerHTML = copyrightText;
console.log(aCopyright);

//Append copyright to footer
newFooter.appendChild(aCopyright);
console.log(newFooter);

//Skills section - List of technical skills
const skills = [
  "Agile",
  "Software Architecture",
  "Software Estimation",
  "Model Based Engineering",
];
console.log(skills);

//Find the skills section and unordered list
const skillsSection = document.getElementById("skills-section");
console.log(skillsSection);
const skillsList = skillsSection.getElementsByTagName("ul");
console.log(skillsList);

//Create the skills list
for (let i = 0; i < skills.length; i++) {
  var skill = document.createElement("LI");
  skill.innerText = skills[i];
  console.log(skill);
  skillsList[0].appendChild(skill);
  console.log(skillsList);
}
//Callback for remove button
function onRemoveButton(event) {
    console.log("Remove");
    const entry = event.target.parentNode;
    entry.remove();
    
}

//Callback for submit
function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  console.log(data);

  const userName = data.get("usersName");
  const email = data.get("email");
  const usersMessage = data.get("usersMessage");
  console.log(userName);
  console.log(email);
  console.log(usersMessage);

  //Display message beneath Messages section
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.getElementsByTagName("ul");
  console.log(messageList);
  const newMessage = document.createElement("LI");
  emailString = `<a href="mailto:${email}">${userName}</a>\n`;
  spanString = `<span>${usersMessage}</span>`;
  console.log(emailString + spanString);

  newMessage.innerHTML = emailString + spanString;
  messageList[0].appendChild(newMessage);

  //Add a remove button
  const removeButton = document.createElement("BUTTON");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id","removeButtonId");
  removeButton.addEventListener("click", onRemoveButton);
  console.log(removeButton);
  messageList[0].appendChild(removeButton);
  

  //Reset the form
  event.target.reset();
}

//Find the leave messages form and add the callback for submit
const messageForms = document.getElementsByName("leave_message");
const messageForm = messageForms[0];
messageForm.addEventListener("submit", onFormSubmit);
