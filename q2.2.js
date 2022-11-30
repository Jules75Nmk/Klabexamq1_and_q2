const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200},
 {name: 'Album', price:10}, {name: 'Book', price:5}, 
{name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];
//this is answer of question 2.2
for(const i in item)
{
  if(item[0].price<item[i].price)
  {
    console.log(item[i])
  }
}
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)