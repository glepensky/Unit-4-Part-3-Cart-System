console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// - Create a global variable named basket and set it to an empty array.
let basket = [];
// - Create a function called addItem. It should:
//   - take an input parameter for a string item
//   - add the new item to the global array basket.
//   - return true indicating the item was added
/**
 *
 * @param {string} item item added
 */
// 3. Update the required addItem function to:
//   - Use the isFull function to prevent more than maxItems from being added to the basket.
//   - If an item was added to the array, return true
//   - If there was no room and the item could not be added return false
const maxItems = 5;
function addItem(item) {
    if (isFull()){
    return false;
    } else if (basket.push(item));
  console.log(item);
  return true;
}

// can also do: function addItem(item){
  // basket.push(item)
  // console.log(basket);
  //return true
  // }

addItem("apples");
addItem("bananas");
addItem("sugar");
addItem("flour");
addItem("eggs");
listItems();
console.log(basket);
// - Create a function called listItems. It should:
//   - loop over the items in the basket array
//   - console.log each individual item on a new line
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

// - Create a function called empty. It should:
//   - reset the basket to an empty array
function empty() {
  basket = [];
  console.log(basket);
}
console.log(basket);


// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
// _Using functions in other functions!_
// 1. Add a global const named maxItems and set it to 5.
// done line 18

// 2. Create a function called isFull(). It should:
//   - return false if the basket contains less than max number of items
//   - return true otherwise (equal or more than maxItems)
function isFull(){
    if (basket.length < maxItems){
        return false
    }
    else {
        return true
    }
}



function isFull(){
  if(basket.length < maxItems){
    return false
  } else if(basket.length >= maxItems){
    return true
  } else {
    console.log("something went wrong")
  }
}
//two conditionals - set up an if, else if and else

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

//function addItem(item){
  // if(isFull() === true){
  //  console.log("basket was full");
  // return false
  //} else if (isFull() === false){
    // basket.push(item)  
     // console.log("new item in basket", item, basket);
     // return true
  //} else
  // console.log("something went wrong in addiTEM()");
  //
  // }

// _Using Array built-in functions!_
// 4. Create a function called removeItem. It should:
//   - Take an input parameter for a string item
//   - Use Array.indexOf to find the index of the first matching item in the basket.
//   - Use Array.splice to remove the first matching item from the basket.
//   - Return the item removed or null if the item was not found

//addItem("apple");
//addItem("banana");
//addItem("red");

// let remove = "banana"
// let remove2 = "kiwi"

// function removeItem(item){
//   for (let i = 0; i < basket.length; index++) {
//     if(item === basket[i]) {
//       let inToRemove = basket.indexOf(item)
//       let removedItem = basket.splice(inToRemove, inToRemove)
//       console.log("end of basket with remove item", basket, removedItem);
//       return removedItem.toString()
//     } else{
//       console.log("issue with removeItem()");
//     }
//   }
// }
// removeItem(remove)
// removeItem(remove2)

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}