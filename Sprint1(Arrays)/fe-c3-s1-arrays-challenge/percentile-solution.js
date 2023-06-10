let marks = [37, 85, 56, 70, 45, 78, 89, 68, 98, 23, 91, 63, 47];


// function to sort the array of marks passed as parameter
function sortArray(array) {
    let temp=0;
    for( i=0; i < array.length; i++){
        for( j=0; j < array.length-i-1; j++){
            if(array[j] > array[j+1]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
     }
return array;
}
let sortedAaray = sortArray(marks);


//function to compute and return the percentile array
function calculatePercentileArray(array) {
    let percentileArray = [];

    for(i=0; i<array.length; i++){
        percentileArray[i] = Math.round((i/array.length)*100);
    }
    // for(i=0; i<percentileArray.length;i++){
    //    percentileArray[i] = Math.round(percentileArray[i])
    // }

    return percentileArray;
}
calculatePercentileArray(sortedAaray);



// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
sortArray,
calculatePercentileArray
}