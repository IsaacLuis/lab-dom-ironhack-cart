// ITERATION 1

// js/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


});


function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value; 
  
    let subtotal = price * quantity 
    const subtotal2 = product.querySelector('.subtotal span');
     subtotal2.innerText = subtotal;
     return subtotal




}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here
const product = document.querySelectorAll('.product');
let value = 0;

for(let i = 0; i <  product.length; i++)
  {
   updateSubtotal(product[i]);
    
  }



  // ITERATION 3
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
    let totalPrice = document.querySelector('#total-value span');
    let total = 0;
    for (let i = 0; i < allProducts.length; i++) {
      total += +(updateSubtotal(allProducts[i]));
    }
    totalPrice.innerHTML = total;
  }









/*

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  Users should be able to remove products from their carts. For that purpose, every product row in our table has a "Remove" button at the end.

But let's try to solve our problem one bit at a time. Inside of the existing function you're passing to window.addEventListener(), start with querying the document for all "Remove" buttons, loop through them, and add a click event listener to each, passing a named function removeProduct as the callback argument. If you need a hint on how to do this, just take a look at how we did it by adding an event listener on the calculatePricesBtn.

We already declared removeProduct(event) and added some starter code. After you are done with querying the remove buttons and adding the click event listener on them, open the console and click on any Remove button.

As we can see, removeProduct(event) expects the event as a single argument, and that is going to trigger the removal of the corresponding product from the cart.

💡 Tip: To access the element an event was fired on, you can reference event.currentTarget. To remove a node from the DOM, you need to access its parent node and call removeChild on it. You can access the parent of a DOM node from its property parentNode.

Make sure the price gets updated accordingly when you remove products from the shopping cart.
  
});
*/
function removeProduct(event) {   // ITERATION 4
  const target = event.currentTarget;

  const thisRow = target.parentNode.parentNode
  const table = thisRow.parentNode
  console.log('The target in remove is:', target, thisRow, table);

  table.removeChild(thisRow)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeProducButtons = document.querySelectorAll(".btn-remove")

  for (let i = 0; i < removeProducButtons.length; i++) {
    removeProducButtons[i].addEventListener('click', removeProduct)
  }

  let createProductButton = document.getElementById("create")

  createProductButton.addEventListener('click', createProduct)
  //... your code goes here
});
