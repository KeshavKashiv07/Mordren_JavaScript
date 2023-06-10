//Store the main document object in a variable
let maindoc = document.getElementById("main-doc");

//Create a new section element with "Section 3" as text
let newSection = document.createElement("section");
newSection.innerText = "Section 3";
//Set the background color for the new section as blue and font color as white
newSection.style.backgroundColor = "blue";
newSection.style.color = "white";
//Set the fontSize to be 1.em and fonWeight as bold
newSection.style.fontSize = "1.4em";
newSection.style.fontWeight ="bold";
//Append the new section created to the main document
maindoc.append(newSection);

//Create a new div element and add some text to it
let contentNode = document.createElement("div");
let content = document.createTextNode("This is the content of Section 3");
contentNode.append(content);

//Append the div element to the main document
maindoc.append(contentNode);
