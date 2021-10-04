class Item {
    
  static all = []

    constructor(itemInfo){
      this.itemInfo = itemInfo
      this.constructor.all.push(this)
      console.log(this)
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

    static renderIndex(){
      const itemContainer = document.createElement("div")
      itemContainer.id = "item-container"
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