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
      const {name, price, imageUrl, id} = this.itemInfo
      document.getElementById("item-container").innerHTML += 
      `<div class="item-card" data-id=${id}>
        <p class="itemPic"><img src=${imageUrl} alt="No Img"/></p> 
        <h4 class="title">${name}</h4>
        <p class="price">$${price}</p><br>   
      </div>`
    }

    static add(item){
      new Item(item)
    }

    renderShow = () => {
      const {name, description, price, imageUrl} = this.itemInfo
      document.getElementById("main").innerHTML = 
      `<div class="show">
      <h2 class="showName">${name}</h2>
        <p><img src=${imageUrl} alt= "(No Photo Yet)"/></p>
        <h3 class="showPrice">Price:<br> $${price}</h3>
        <p><strong> Details:</strong> </p>
        <p class="showDesc">${description}</p>
      </div>
      <button id="backButton">Go Back</button>`
      document.getElementById("backButton").addEventListener("click", Item.renderIndex)
    }
    
    static find = (id) => this.all.find(item => item.itemInfo.id == id)

    static handleClick = (e) => {
      if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
        const id = e.target.closest(".item-card").dataset.id
        this.find(id).renderShow()
      }
    }

    static renderIndex = () => {
      const itemContainer = document.createElement("div")
      itemContainer.id = "item-container"
      const main = document.getElementById("main")
      main.innerHTML = ""
      main.appendChild(itemContainer)
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