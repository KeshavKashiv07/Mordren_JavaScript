const menu = [
    {
        'category': 'Beverages',
        'name': 'Soft Drink',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Beverages',
        'name': 'Milk Shake',
        'price': 2.0
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Soft Drink',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};
const discount = 0.05;


//function to list menu items by category
function listByCategory(menu , categoryName) {
    const filterCategory = menu.filter(array => {
        return array.category === categoryName;   
    });
    const sortedFilterCategory = filterCategory.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > a.name) {
          return 1;
        }
        // names must be equal
        return 0;
      });

    return sortedFilterCategory;
}
console.log(listByCategory(menu , 'Starters'));





//funtion to calculate the total of each item ordered
function calculateOrderAmountForEachItem(menu, order) {
    const orderAmountForEachItem = order.items.map(item => {
      const menuItem = menu.filter(menuItem => menuItem.name === item.name);
      const amount = item.quantity * menuItem[0].price;
      return {
        name: item.name,
        quantity: item.quantity,
        price: menuItem[0].price,
        category: menuItem[0].category,
        amount: amount
      };
    });
    return orderAmountForEachItem;
  }
  console.log(calculateOrderAmountForEachItem(menu , order));
  
  


//function to calculate the main meal count to avail freebie
  function calculateMainMealCount(menu,order) {

    const mainMeals = menu.filter(menu => menu.category === 'Main Meal');

         const mainMealsCount = order.items.reduce((sum, item) => {
            if(mainMeals.find(mainMeals => mainMeals.name === item.name)) 
            {
            return sum + item.quantity;
            }
           return sum;
           }, 0);
          // console.log(`one soft drink is free`);
  return mainMealsCount;
  }
 console.log(calculateMainMealCount(menu,order));




//function to calculate the total bill amount 
function calculateTotalAmount(menu,order) {
    const transformedOrder = order.items.map((orderArray) => {                // Map its gives another array , not effects on main array
        const menuItem = menu.filter((menuItem) => menuItem.name === orderArray.name);
        return {
          amount: orderArray.quantity * menuItem[0].price    
        };
      });
      const totalAmount = transformedOrder.reduce((initialVal, item) => {      // reduce its gives single value
        return initialVal + item.amount;
      }, 0);
    
      return totalAmount;
}
console.log(calculateTotalAmount(menu,order));   




//funtion to calculate the final bill amount after applying discount
function calculateFinalAmount(menu , order , discount) {
    const transformedOrder = order.items.map((orderArray) => {                // its gives another array , not effects on main array
        const menuItem = menu.filter((menuItem) => menuItem.name === orderArray.name);
        return { amount: orderArray.quantity * menuItem[0].price };
      });
      const totalAmount = transformedOrder.reduce((initialVal, item) => {      // reduce its gives single value
      return initialVal + item.amount;
      }, 0);
       
      if(totalAmount >=  50){
      // const discountAmt = discount*totalAmount;
      // const discountedBill = totalAmount - discountAmt;
      // return Math.round(discountedBill);
     // return Math.round(discountedBill * 0.95 *100)/100;
     return Math.round(totalAmount * 0.95 * 100) / 100;
    }
}
console.log(calculateFinalAmount(menu , order , discount));




//function to return a message if the order is eligible for free drink or null otherwise
function isEligibleForFreeDrink(menu, order) {
    let count=0;
    const transformedOrder = order.items.map((orderArray) => {                // its gives another array , not effects on main array
        const menuItem = menu.filter((menuItem) => menuItem.name === orderArray.name);
        if(menuItem[0].category == 'Main Meal'){
            count++;
            return count;
        }       
      });

      if(count >= 2){
        return `Hurray!!The order is eligible for a free soft drink. Please do collect it!`;
      }
      else{
        return null;
      }
}
console.log(isEligibleForFreeDrink(menu , order));






module.exports = {
    listByCategory,
    calculateOrderAmountForEachItem,
    calculateMainMealCount,
    calculateTotalAmount,
    calculateFinalAmount,
    isEligibleForFreeDrink
}




