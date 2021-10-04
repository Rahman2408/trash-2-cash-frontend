
const api = new ApiService("http://localhost:3000")

Item.getItems()

function getBank(arry) {
  let sum = 0
  arry.forEach(element => {
    if (element.itemInfo['price']){
      sum += element.itemInfo['price'] 
    }
    });
  return sum;
}

const userBank = getBank(Item.all)