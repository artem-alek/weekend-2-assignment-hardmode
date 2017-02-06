// how me how to calculate the average price of all items.
//   The average price is $23.63
avgPrice()
function avgPrice () {
  var answerBox1 = document.getElementById('answer1')
  var total = 0
  items.forEach(function (itemsI) { total = itemsI.price + total })
  answerBox1.innerHTML = 'The average price is $' + (total / items.length).toFixed(2)
}

// Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
// Answer 2 :
//  1970s Coors Banquet Glass Beer Pitcher
//  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//  Hand Painted Colorful Feather Glass

// costBetween()
// function costBetween () {
//   var answerBox2 = document.getElementById('answer2')
//   items.forEach(function (itemsI) {
//     if (itemsI.price > 14.00 && itemsI.price < 18.00) {
//       answerBox2.innerHTML += '<p>' + itemsI.title + '</p>'
//     }
//   })
// }
//

// this is the long way that used anyonmus function callback
//items.filter(function (x) { return x.price > 14 && x.price < 18 }).forEach(function (x) { return title += "<p>" + x.title + "</p>" })



var titlePrint = document.getElementById('answer2')
// decieded to make the anynomus functions into indivual named functions to do the math and set return
function filterTest (x) { return x.price > 14 && x.price < 18 }
function foreachTitle (x) { titlePrint.innerHTML += '<p>' + x.title + '</p>' }

// replaced the anynomus functions with the function name as a argument
items.filter(filterTest).forEach(foreachTitle)

// title.forEach(function (x) { return answerBox2.innerHTML += x.title })

// function costBetween() {
//   var newArray = items.filter(function (x) {‹›
//
//   })
// }

// Question 3: Which item has a "GBP" currency code? Display it's name and price.
// Answer 3: 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// currencyCode()
// function currencyCode () {
//   var itemI
//   var answerBox3 = document.getElementById('answer3')
//   items.forEach(function (itemsI) {
//     if (itemsI.currency_code.includes('GBP')) {
//       answerBox3.innerHTML = '<p>' + itemsI.title + 'costs &pound' + itemsI.price
//     }
//   })
// }

var answerBox3 = document.getElementById('answer3')

function getCode (x) { return x.currency_code.includes('GBP') }
function titleofGBP (x) { return answerBox3.innerHTML = '<p>' + x.title + 'costs &pound' + x.price + '</p>' }

items.filter(getCode).forEach(titleofGBP)

// Question 4: Display a list of all items who are made of wood.
//   SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//   Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//   Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//   Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//   Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

var answerBox4 = document.getElementById('answer4')

function getWood (x) { return x.materials.includes('wood')}
function woodTitle (x) { return answerBox4.innerHTML += '<p>' + x.title + ' is made of wood.' }

items.filter(getWood).forEach(woodTitle)

// Question 5: Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// Answer 5:
//   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//   wall mount bottle opener
//   wedding
//   man cave
//   christmas gift
//   guy gift
//   fathers day
//   home bar
//   beer
//   bar

//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//   glass
//   sandblast cabinet
//   vinyl
//   beer glass
//   pint glass
//   etched pint glass
//   etched glass
//   etched beer glass
//   16 oz pint
//   beer gift
//   etched harry potter glass
//   the three broomsticks glass
//   personalized harry potter glass

var answerBox5 = document.getElementById('answer5')

function materialsTest (x) { x.materials.length >= 8; }

items.filter(materialsTest).map()
