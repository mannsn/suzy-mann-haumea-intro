


//Create a footer element
const aFooter = document.createElement("FOOTER");
aFooter.className = "footer";
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);

//Get the current year
var today = new Date();
var thisYear = today.getFullYear();

//Find the added footer element
var newFooter = document.querySelector("footer");
console.log(newFooter);

//Create the copyright
var aCopyright = document.createElement("P");
const copyrightSymbol = "\u00A9";
var copyrightText = copyrightSymbol + "Suzy Mann " + thisYear;
aCopyright.innerHTML = copyrightText;

//Append copyright to footer
newFooter.appendChild(aCopyright);

//Skills section - List of technical skills
const skills = [
  "Agile",
  "Software Architecture",
  "Software Estimation",
  "Model Based Engineering",
];
//Find the skills section and unordered list
const skillsSection = document.getElementById("skills-section");
const skillsList = skillsSection.getElementsByTagName("ul");

//Create the skills list
for (let i = 0; i < skills.length; i++) {
  var skill = document.createElement("LI");
  skill.innerText = skills[i];
  skillsList[0].appendChild(skill);
}

 

//Callback for remove button
function onRemoveButton(event) {
  console.log("Remove");
  const entry = event.target.parentNode;
  entry.remove();

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.getElementsByTagName("li");
  console.log(messageList);
  console.log(messageList.length);
  if (messageList.length === 0) {
    messageSection.hidden = true;
  }
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

  //Display the message section
  messageSection.hidden = false;

  const newMessage = document.createElement("LI");
  newString = `<a href="mailto:${email}">${userName}</a>\n 
  <span>${usersMessage} </span>`;
  console.log(newString);
  newMessage.innerHTML = newString;

  //Add a remove button
  const removeButton = document.createElement("BUTTON");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "removeButtonId");
  removeButton.addEventListener("click", onRemoveButton);
  console.log(removeButton);

  //Add remove button
  newMessage.appendChild(removeButton);

  //Add message
  messageList[0].appendChild(newMessage);

  //Reset the form
  event.target.reset();
}

//Find the leave messages form and add the callback for submit
const messageForms = document.getElementsByName("leave_message");
console.log(messageForms);
const messageForm = messageForms[0];
console.log(messageForm);

 

 //Attach the listener
messageForm.addEventListener("submit", onFormSubmit);
