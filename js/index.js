//Create a footer element
const aFooter = document.createElement('FOOTER');
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
const copyrightSymbol = '\u00A9'
var copyrightText = copyrightSymbol + "Suzy Mann " + thisYear;
aCopyright.innerHTML=copyrightText;
console.log(aCopyright);

//Append copyright to footer
newFooter.appendChild(aCopyright);
console.log(newFooter);

//Skills section - List of technical skills
const skills =["Agile", "Software Architecture", "Software Estimation", "Model Based Engineering"];
console.log(skills);

//Find the skills section and unordered list
const skillsSection = document.getElementById("skills-section");
console.log(skillsSection);
var skillsList = document.getElementById("skills-list");
console.log(skillsList);

for (let i = 0; i< skills.length; i++)
{
    var skill = document.createElement("LI");
    skill.innerText = skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);

}







