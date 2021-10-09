class Listing{ 
static all =[]
  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  get all(){
    return this.all
  }

  renderListing = () => {
    const {name, site} = this.data
    const card = document.querySelector(".listings")
    const cardEl = document.createElement("div")
    cardEl.className = "list-card"
    card.appendChild(cardEl)
    cardEl.innerHTML += `
      <h4>${name}</h4>
      <p>${site}</p>
      `
    // document.querySelector("listSites").addEventListener("click", function(e){
    //   if (e.target.classList.contains("")){}
    // })
  }
  
  static find = (id) => this.all.find(site => site.data.id == id)

  static newList = () => {
    modal.open()
    modal.main.innerHTML = ""
    const siteIn = document.createElement("form")
    modal.main.appendChild(siteIn)
    Listing.all.forEach(site => {
      siteIn.innerHTML += `
       <input type="checkbox" id="${site.data.name}" name="${site.data.name}" value="${site.data.name}">
       <label for="${site.data.name}"> ${site.data.name}</label><br>`
    })
  }

}
