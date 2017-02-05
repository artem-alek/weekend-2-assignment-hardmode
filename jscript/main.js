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

function filterTest (x) { return  apples.price > 14 && apples.price < 18 }
function foreachTitle (x) { return title += "<p>" + x.title + "</p>" }

var title
items.filter(filterTest).forEach(foreachTitle)

// items.filter(function (x) { return x.price > 14 && x.price < 18 }).forEach(function (x) { return title += "<p>" + x.title + "</p>" })
// title.forEach(function (x) { return answerBox2.innerHTML += x.title })

// function costBetween() {
//   var newArray = items.filter(function (x) {
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
