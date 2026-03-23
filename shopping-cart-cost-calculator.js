let booksPrice = 15;
let tshirtPrice = 20;
let booksQuantity = 2;
let tshirtQuantity = 3;
let taxRate = 0.08;
let shippingFee = 5;
let booksSubtotal = booksPrice * booksQuantity;
let tshirtSubtotal = tshirtPrice * tshirtQuantity;
let subtotal = booksSubtotal + tshirtSubtotal;
let taxAmount = subtotal * taxRate;
let totalcost = subtotal + taxAmount + shippingFee;
console.log(totalcost)