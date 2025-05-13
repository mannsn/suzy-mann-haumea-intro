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
//Message form functions

//Callback for save button
function onSaveButton(event) {
  console.log("Save");

  const entry = event.target.parentNode;
  console.log(entry);

  //Get the updated input fields
  const inputElement = entry.querySelector("input");
  let usersMessage = entry.querySelector("input[name='usersMessage']").value;
  console.log(usersMessage);

  // Create span field from updated input field
  let spanText = document.createElement("span");
  spanText.textContent = usersMessage;
  console.log(spanText);

  //Replace the old message with the new one
  inputElement.replaceWith(spanText);

  // Change button to "Edit"
  this.textContent = "Edit";
  this.classList.add("editButton");
  this.setAttribute("id", "editButtonId");
  this.removeEventListener("click", onSaveButton);
  this.addEventListener("click", onEditButton);
  console.log(this);
}

//Callback for edit  button
function onEditButton(event) {
  console.log("Edit");
  const entry = event.target.parentNode;
  const messageElement = entry.querySelector("span");

  // Create input field and replace span
  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.name = "usersMessage";
  inputField.value = messageElement.textContent;
  console.log(inputField);

  messageElement.replaceWith(inputField);

  // Change button to "Save"
  this.textContent = "Save";
  this.classList.add("saveButton");
  this.setAttribute("id", "saveButtonId");
  this.removeEventListener("click", onEditButton);
  this.addEventListener("click", onSaveButton);
  console.log(this);
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

  //Add an edit  button
  const editButton = document.createElement("BUTTON");
  editButton.innerText = "Edit";
  editButton.setAttribute("type", "button");
  editButton.setAttribute("id", "editButtonId");
  editButton.addEventListener("click", onEditButton);
  console.log(editButton);

  //Add a remove button
  const removeButton = document.createElement("BUTTON");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "removeButtonId");
  removeButton.addEventListener("click", onRemoveButton);
  console.log(removeButton);

  //Add edit button
  newMessage.appendChild(editButton);

  //Add remove button
  newMessage.appendChild(removeButton);

  //Add message
  messageList[0].appendChild(newMessage);

  //Reset the form
  event.target.reset();
}

//Hide the message section initially
const messageSection = document.getElementById("messages");
messageSection.hidden = true;

//Find the leave messages form and add the callback for submit
const messageForms = document.getElementsByName("leave_message");
console.log(messageForms);
const messageForm = messageForms[0];
messageForm.addEventListener("submit", onFormSubmit);

//Get the repositories from github
fetch("https://api.github.com/users/mannsn/repos")
  //Get the response
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json(); // Parse the response as JSON
  })

  //Get the data and add it to the html
  .then((data) => {
    console.log("json data = ", data);
    repositories = [...data];
    console.log("repositories array =", repositories);

    //Find the project section and ul
    const projectSection = document.getElementById("projects-section");
    const projectList = projectSection.getElementsByTagName("UL");

    //Create the respositories list by adding it to the html
    for (let i = 0; i < repositories.length; i++) {
      var project = document.createElement("LI");
      project.className = "repo-list";

      var respositoryRow = document.createElement("DIV");
      respositoryRow.className = "repoRow";

      var respositoryName = document.createElement("DIV");
      respositoryName.className = "repoName";
      respositoryName.innerText = `${repositories[i].name}`;
      console.log(respositoryName);

      var respositoryDescription = document.createElement("DIV");
      respositoryDescription.className = "repoDesc";

      respositoryDescription.innerText = repositories[i].description 
      ? repositories[i].description 
      : `${repositories[i].name} development git repository`;
    
    console.log(respositoryDescription);
    
    project.appendChild(respositoryRow);
      project.appendChild(respositoryName);
      project.appendChild(respositoryDescription);
      projectList[0].appendChild(project);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
