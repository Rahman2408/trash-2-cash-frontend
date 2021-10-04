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

    static getItems(){
      api.getItems().then(items =>{
        items.forEach(item => Item.addItem(item))
      })
    }

}