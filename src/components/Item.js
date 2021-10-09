class Item {
    
  static all = []

    constructor(itemInfo){
      this.itemInfo = itemInfo
      this.listings = this.itemInfo.listings.map(site => new Listing(site))
      this.constructor.all.push(this)
    }
    
    static handleSubmit = (e) => {
      e.preventDefault()
      const newItem = {
        name: e.target.itemName.value, 
        price: e.target.price.value, 
        image_url: e.target.imageUrl.value,
        description: e.target.description.value,
        
      }
      api.createItem(newItem).then(item => {
        new Item(item).renderItem()
      })
      modal.close()
      e.target.reset()
    }
    
    static sellItemForm = () => {
      modal.main.innerHTML = 
      `<form>
      <label for="itemName">Item to Sell:</label><br>
      <input type="text" id="itemName" name="itemName"><br>
      <label for="price">Price (Round Whole Dollars):</label><br>
      $<input type="number" id="price" name="price"><br>
      <label for="imageUrl">Link to Image of Item:</label><br>
      <input type="text" id="imageUrl" name="imageUrl"><br>
      <label for="description">Item Description:</label><br>
      <input type="text" id="description" name="description"><br>
      <input type="submit" value="Submit">
      </form>`
      modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
      modal.open()
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
      <div class="container"><strong>You're selling this on:</strong><br></div>
      <button id="addSite">Add a Website to List Item</button><br><br>
      <button id="backButton">Go Back</button>`
      document.getElementById("backButton").addEventListener("click", Item.renderIndex)
      document.getElementById("addSite").addEventListener("click", Listing.newSite)
      this.listings.forEach(sPoint => sPoint.render())
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
      const addItem = document.createElement("button")
      addItem.innerText = "Add Item to Sell"
      addItem.addEventListener("click", this.sellItemForm)
      main.append(itemContainer, addItem)
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
  // static currentBank = () => {
  //   let sum = 0
  //   Item.all.forEach(element => {
  //     if (element.itemInfo['price'] && element.itemInfo['forSale']){
  //       sum += element.itemInfo['price'] 
  //     }
  //     });
  //   return sum;
  // }
  
  // static renderBank = () => {
  //   const bank = document.getElementById("bank");
  //   const bankEl = document.createElement("h2");
  //   bankEl.innerHTML = `Your Bank: $${Item.currentBank()} `;
  //   bank.appendChild(bankEl);
  // }