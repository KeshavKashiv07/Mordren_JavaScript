// Create a new paragraph element​ with the 
let newParagraph = document. createElement("p");
newParagraph.innerText = "This is a new paragraph";

// Append the newly created paragraph element to the element with Id content​
let contentNode = document.getElementById("content");
contentNode.appendChild(newParagraph);

// Remove the paragraph with id "removeElement​"
let elementToBeRemoved = document.getElementById("removeElement");
elementToBeRemoved.remove();
