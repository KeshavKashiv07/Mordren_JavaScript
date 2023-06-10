// Select first image in the document and display the value of the src of the image.​
console.log(document.getElementsByTagName("img")[0].src);

// Remove the first paragraph element from the document​
let firstParagraph = document.getElementsByTagName("p")[0];
firstParagraph.remove();

//Display the number of times div tag is used in the webpage​
console.log(document.getElementsByTagName('div').length);

// Select the element having primaryText as ​the id and display the content in it.​
console.log(document.getElementById('content'));
