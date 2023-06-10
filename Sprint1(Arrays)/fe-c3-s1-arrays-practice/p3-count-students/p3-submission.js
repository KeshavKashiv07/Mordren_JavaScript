let marks = [100,51 , 30 , 60 ,78 , 50 ,89 , 90 ,99 , 98];

//Find the count of students who have scored marks>=40 from tha array of marks passed as parameter 
function findCount(marks){
    let count=0;

    for(i=0; i<marks.length ; i++){
        if(marks[i] >= 40){
            count++;
        }
    }
    return count;
 
}

let countNum = findCount(marks);
console.log(countNum);

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findCount
}