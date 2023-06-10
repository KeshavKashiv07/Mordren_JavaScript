// Task 1 - Create JSON data

const deliveries = `[
    {
      "deliveredBy": "Charles Garcia",
      "orderNumber": 234324,
      "customerName": "Michael Williams",
      "phoneNumber": [{"Phone1": "+12052349876"} , {"Phone2": "+12052349876"}],
      "customerAddress": {"StreetNo": "501m","StreetName": "Hopton Street","city": "Orlando","State": "Florida"},         
      "tipAmount": 10,
      "customerRating": 4.5,
      "outletRating": 3
    },
    {
      "deliveredBy": "Andrew Clark",
      "orderNumber": 897655,
      "customerName": "George Wilson",
      "phoneNumber": [{"Phone1": "+12652349712"} , {"Phone2": "+12752344376"}],
      "customerAddress": {"StreetNo": "281d","StreetName": "Sea View","city": "South Austin","State": "Texas"},
      "tipAmount": 5,
      "customerRating": 4,
      "outletRating": 4.5
    },
    {
      "deliveredBy": "Andrew Clark",
      "orderNumber": 1560986,
      "customerName": "Ella Rodriguez",
      "phoneNumber": [{"Phone1": "+12902346589"} , {"Phone2": "+12902300610"}],
      "customerAddress": {"StreetNo": "892g","StreetName": "Parkside Park","city": "Louiseville","State": "Kentucky"},
      "tipAmount": 0,
      "customerRating": 3,
      "outletRating": 4
    },
    {
      "deliveredBy": "Nicholas Taylor",
      "orderNumber": 2224317,
      "customerName": "Olivia Davis",
      "phoneNumber": [{"Phone1": "+12452342200"} , {"Phone2": "+12452277881"}],
      "customerAddress": {"StreetNo": "108a","StreetName": "Buller Hawthorns","city": "Trenton","State": "New Jersey"},
      "tipAmount": 5,
      "customerRating": 5,
      "outletRating": 4
    },
    {
      "deliveredBy": "Charles Garcia",
      "orderNumber": 2887648,
      "customerName": "Lucy Thomas",
      "phoneNumber": [{"Phone1": "+13152119733"} , {"Phone2": "+13175264437"}],
      "customerAddress": {"StreetNo": "557a","StreetName": "Cygnet Court","city": "Dover","State": "Delaware"},
      "tipAmount": 20,
      "customerRating": 1,
      "outletRating": 2
    },
    {
      "deliveredBy": "Charles Garcia",
      "orderNumber": 234541,
      "customerName": "Richard Mia",
      "phoneNumber": [{"Phone1": "+12052333876"} , {"Phone2": "+12052343176"}],
      "customerAddress": {"StreetNo": "501m","StreetName": "Hopton Street","city": "Orlando","State": "Florida"},
      "tipAmount": 10,
      "customerRating": 4.5,
      "outletRating": 3
    },
    {
      "deliveredBy": "Andrew Clark",
      "orderNumber": 897690,
      "customerName": "Eric Claire",
      "phoneNumber": {"Phone1": "+12652387712" , "Phone2": "+12752322396"},
      "customerAddress": {"StreetNo": "292f","StreetName": "North View","city": "South Austin","State": "Texas"},
      "tipAmount": 10,
      "customerRating": 4,
      "outletRating": 4.5
    }
  ]` 


// Task 2 - Convert JSON to JavaScript Object
const deliveryObject = JSON.parse(deliveries);
for(key of deliveryObject){
console.log(key);
}


// Task 3 - No. of orders delivered by a delivery person in a particular city
function countDeliveries(deliveryObject , deliveredPerson , city) {
    const filterDeliver = deliveryObject.filter(array=>{return array.deliveredBy == deliveredPerson}).filter(array=>{
        return array.customerAddress.city == city;
    });
    const countDeliver = filterDeliver.reduce((sum , item)=>{
        return sum+1;
    },0);
   return countDeliver
    
}
console.log(countDeliveries(deliveryObject , "Charles Garcia" ,"Orlando" ));


// Task 4 - Total tip amount earned by a delivery person
function calculateTotalTipAmount(deliveryObject ,deliveredPerson) {
        const filterTip = deliveryObject.filter(array=>{return array.deliveredBy===deliveredPerson});
        const totalAmount = filterTip.reduce((sum, item) => {      // reduce its gives single value
            return sum + item.tipAmount;
          }, 0);
          return totalAmount;        
}
console.log(calculateTotalTipAmount(deliveryObject , "Andrew Clark"));


// Task 5 - Delivery wise customer and outlet ratings for a delivery person
function getDeliveryWiseRatings(deliveryObject ,deliveredPerson) {
    const filterPerson = deliveryObject.filter(array=>{return array.deliveredBy===deliveredPerson});
    const mapPerson = filterPerson.map(array=>{
        return {
            orderNumber : array.orderNumber,
            customerName : array.customerName,
            customerRating : array.customerRating,
            outletRating : array.outletRating
        }
    })
    return mapPerson;    
}
console.log(getDeliveryWiseRatings(deliveryObject , "Nicholas Taylor"));


// Task 6 - Based on Customer and outlet Rating, calculate average rating for each delivery person. 
//          Modify the JSON and include the average rating 
function calculateAverageRating(deliveryObject) {
    const mapAverageRating = deliveryObject.map(array=>{
        return{
            deliveredBy: array.deliveredBy,
            orderNumber: array.orderNumber,
            customerName: array.customerName,
            phoneNumbers: array.phoneNumbers,
            customerAddress: array.customerAddress,
            tipAmount: array.tipAmount,
            customerRating: array.customerRating,
            outletRating: array.outletRating,
            averageRating : (array.customerRating + array.outletRating)/2
        }
    })
    const JsonData = JSON.stringify(mapAverageRating);
    return JsonData

    
}
console.log(calculateAverageRating(deliveryObject));


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    countDeliveries,
    calculateTotalTipAmount,
    getDeliveryWiseRatings,
    calculateAverageRating
}