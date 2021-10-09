class Listing{ 
static all =[]
  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  get all(){
    return this.all
  }

  render = () => {
    const {name, site} = this.data
    const card = document.querySelector(".container")
    const cardEl = document.createElement("div")
    cardEl.id = "listSites"
    cardEl.innerHTML += `
      <a href=${site}>
      <h4>${name}</h4>
      </a>
    `
    card.appendChild(cardEl)
  }
  
  static find = (id) => this.all.find(site => site.data.id == id)

  static newSite = () => {
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
