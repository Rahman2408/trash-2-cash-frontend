class Item {
    
  static all = []

    constructor(itemInfo){
      this.itemInfo = itemInfo
      this.constructor.all.push(this)
      console.log(this)
    }

    static addItem(item){
      new Item(item)
    }

    static renderItems(){
      const itemContainer = document.createElement("div")
      itemContainer.classList.add("item-container")
      document.getElementById("main").appendChild(itemContainer)
    }


    static getItems(){
      api.getItems().then(items =>{
        items.forEach(item => Item.addItem(item))
        this.renderItems()
      })
    }

  
}