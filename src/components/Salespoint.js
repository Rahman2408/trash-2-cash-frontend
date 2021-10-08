class Salespoint{ 

  constructor(data){
    this.data = data 
  }

  render = () => {
    const {name, site, logo} = this.data
    const card = document.querySelector(".container")
    const cardEl = document.createElement("div")
    cardEl.id = "listSites"
    cardEl.innerHTML += `
      <a href=${site}>
      <h4>${name}</h4>
      <img border="0" alt=${site} src=${logo} width="100" height="100">
      </a>
    `
    card.appendChild(cardEl)
  }
}