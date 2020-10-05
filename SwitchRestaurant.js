let restaurantItem = prompt("Please select a dish from menu");
let price
switch (restaurantItem) {
  case 'Burger':
    restaurantItem = "The price for burger is ";
    price = "$"+ 10;
    console.log(restaurantItem + price);
    break;
  case 'Steak':
    restaurantItem = "The price for Steak is ";
    price = "$"+ 25;
    console.log(restaurantItem + price);
    break;
  case 'Salmon':
    restaurantItem = "The price for Salmon is ";
    price = "$"+ 20;
    console.log(restaurantItem + price);  
    break;

  case 'Shrimp':
    restaurantItem = "The price for Shrimp is ";
    price = "$"+ 20;
    console.log(restaurantItem + price);
    break;  
  
  case 'Chicken':
    restaurantItem = "The price for Chicken is ";
    price = "$"+ 15;
    console.log(restaurantItem + price);
    break;  

  default:
    console.log("Please only select items from Menu");
}
