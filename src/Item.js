class Item {
    
  static all = []

    constructor(itemInfo){
      this.itemInfo = itemInfo
      this.constructor.all.push(this)
      console.log(this)
    }

    renderItem = () => {
      const {name, description, price, forSale, imageUrl} = this.itemInfo
      document.querySelector(".item-container").innerHTML += 
      `<div class="item-card">
        
        <h4 class="title">${name}</h4>
        <p class="description">${description}</p>
        <p class="price">$${price}</p>
        <p class="itemPic"><img src=${imageUrl} alt=${name}/></p> 
      </div>`
    }

    static add(item){
      new Item(item)
    }

    static renderIndex(){
      const itemContainer = document.createElement("div")
      itemContainer.classList.add("item-container")
      document.getElementById("main").appendChild(itemContainer)
      this.all.forEach(item => item.renderItem())
    }


    static getItems(){
      api.getItems().then(items =>{
        items.forEach(item => Item.add(item))
        this.renderIndex()
      })
    }

  
}