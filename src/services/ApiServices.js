class ApiService {

  constructor(api){
    this.api = api
  }

  getItems = () => fetch(this.api + "/items").then(response => response.json())

  createItem = (newItem) => fetch(this.api + "/items", {
    method: 'POST', 
    headers: {'Content-Type': 'application.json'},
    body: JSON.stringify(newItem)
  })
  .then(response => response.json())
}