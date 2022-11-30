const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200},{name: 'Album', price:10}, {name: 'Book', price:5}, 
{name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];
 sum=0.0;
//this is answer of question 2.4
for(const i in item)
{
  sum +=item[i].price;
  if(item[0].price<item[i].price)
  {
    console.log(sum);
  }
}
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)