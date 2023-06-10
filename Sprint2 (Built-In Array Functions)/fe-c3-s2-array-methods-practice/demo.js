petAnimals = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

//   const result = petAnimals.filter(array=>{
//     return array.type == 'dog';
//   });
// console.log(result);


//   const result2 = result.map(array=>{
//     array.age = array.age*7;
//     return array.age;
//   });
// console.log(result2);


// const totalage = result2.reduce((sum, item) => {     
//     return sum + item;
//   }, 0);

// console.log(totalage);


let results = petAnimals.filter(array=>array.type == 'dog').map(array=>array.age*7).reduce((sum, item)=>sum + item
,0);
console.log(results);


const arr1=[10,52,46,58,96,87,41,25,63,12,10,2,35];

const array = arr1.filter(ar=>{
    return ar>40;
})
const array2 = array.reduce((sum)=>{
    return sum=sum+1 ;
},0);
console.log(array2);



const arr=[7,19,10,5,14,2,8,4,20];
  const pls=arr.filter(arr=>arr%2==0).map(arr=>arr*5).reduce((sum , values)=>{return sum+values},0);
  console.log(pls);