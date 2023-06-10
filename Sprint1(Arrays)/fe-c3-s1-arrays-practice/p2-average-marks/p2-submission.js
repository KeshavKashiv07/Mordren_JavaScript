let marks = [19,59 , 30 , 60 ,78 , 50 ,89 , 90 ,99 , 98];

//Calculate the average of array of marks passed as parameter
function calculateAverage(marks) {
    let sum=0;
    let averageMarks=0;
    let size = marks.length;
    
    for(i=0;i<size;i++){
        sum = sum + marks[i]; 
    }
    averageMarks = sum / marks.length;
    return averageMarks;
}
let avgMarks = calculateAverage(marks);
console.log(avgMarks)

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateAverage
}