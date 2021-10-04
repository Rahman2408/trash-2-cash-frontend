class Item {
    
  static all = []

    constructor(itemInfo){
      this.itemInfo = itemInfo
      this.constructor.all.push(this)
      console.log(this)
    }
    
    static currentBank = () => {
      let sum = 0
      Item.all.forEach(element => {
        if (element.itemInfo['price'] && element.itemInfo['forSale']){
          sum += element.itemInfo['price'] 
        }
        });
      return sum;
    }
    
    static renderBank = () => {
      const bank = document.getElementById("bank");
      const bankEl = document.createElement("h2");
      bankEl.innerHTML = `Your Bank: $${Item.currentBank()} `;
      bank.appendChild(bankEl);
    }

    renderItem = () => {
      const {name, description, price, imageUrl} = this.itemInfo
      document.getElementById("item-container").innerHTML += 
      `<div class="item-card">
        <p class="itemPic"><img src=${imageUrl} alt=${name}/></p> 
        <h4 class="title">${name}</h4>
        <p class="price">$${price}</p><br>
        <p class="description">${description}</p>        
      </div>`
    }

    static add(item){
      new Item(item)
    }

    static handleClick = (e) => {
      console.log(e)
    }

    static renderIndex = () => {
      const itemContainer = document.createElement("div")
      itemContainer.id = "item-container"
      document.getElementById("main").appendChild(itemContainer)
      this.all.forEach(item => item.renderItem())
      itemContainer.addEventListener("click", this.handleClick )
    }


    static getItems = () => {
      api.getItems().then(items =>{
        items.forEach(item => Item.add(item))
        this.renderIndex()
      })
    }

  
}