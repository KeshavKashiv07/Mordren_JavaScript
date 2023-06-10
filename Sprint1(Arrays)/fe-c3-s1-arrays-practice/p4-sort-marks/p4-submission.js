let marks = [20 , 50 , 40 , 60 , 80 , 67 ,90 , 5]

//Sort the marks from an array of marks passed as parameter
function sortMarks(marks) {
    let temp=0;
    	   for( i=0; i < marks.length; i++){
    		   for( j=0; j < marks.length-i-1; j++){
    			   if(marks[j] > marks[j+1]){
    				   temp=marks[j];
    				   marks[j]=marks[j+1];
    				   marks[j+1]=temp;
    			   }
    		   }
            }
     return marks;
}

let sortedMarks = sortMarks(marks);
for(i=0; i<sortedMarks.length; i++){
    console.log(sortedMarks[i]);
}


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    sortMarks
}
