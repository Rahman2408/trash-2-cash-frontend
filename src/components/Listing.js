class Listing{ 
  static all = []
  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  
  static listSubmit = (e) => {
    e.preventDefault()
    const newList = {
      name: e.target.listName.value,
      site: e.target.listLink.value,
    }
    api.addListing(newList).then(listing => {
      new Listing(listing).renderListingSite()
    })
    modal.close()
    e.target.reset()
  }
  static add(site){
    new Listing(site)
  }
  static newListForm = () => {
    modal.main.innerHTML = `
    <h1> New Listing </h1>
    <h3> Here you can specify where you're currently or planning on selling an item!</h3> 
    <form>
    <label for="listName">Name or Nickname:</label><br>
    <input type="text" id="listName" name="listName"><br>
    <label for="listLink">Listing URL:</label><br>
    <input type="text" id="listLink" name="listLink"><br>
    <input type="submit" value="Add Listing "><br><br>
    </form>   
    `
    modal.main.querySelector("form").addEventListener("submit", this.listSubmit)
    modal.open()
  }

  renderListingSite = () => {
    const {name, site} = this.data
    const card = document.getElementById("listMain")    
    const cardEl = document.createElement("div")
    cardEl.className= "list-card"
    card.appendChild(cardEl)
    cardEl.innerHTML +=  
    `
    <h4>${name}</h4>
    <p><strong>Site:  </strong>${site}</p>
    `
   }


   static renderListIndex = () => {
    const listSiteContainer = document.createElement("div")
    listSiteContainer.id = "list-container"
    const main = document.getElementById("listMain")
    main.innerHTML = ""
    const addSite = document.createElement("button")
    addSite.innerText = "Add Site to Sell Items"
    addSite.addEventListener("click", this.newListForm)
    main.append(listSiteContainer, addSite)
    this.all.forEach(site => site.renderListingSite())
  
  }

  static getSites = () => {
    api.getSites().then(sites =>{
      sites.forEach(site => Listing.add(site))
      this.renderListIndex()
    })
  }
}