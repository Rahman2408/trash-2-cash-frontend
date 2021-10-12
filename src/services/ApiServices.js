class ApiService {

  constructor(api){
    this.api = api
  }

  getItems = () => fetch(this.api + "/items").then(response => response.json())
  getSites = () => fetch(this.api + "/listings").then(response => response.json())
  
  
  createItem = (newItem) => {
    
    return fetch(this.api + "/items", {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newItem),
  })
  .then(response => response.json())}
  
  addListing = (listings) => {
  
    return fetch(this.api + "/listings", {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(listings),
  })
  .then(response => response.json())
}
  
  // findOrCreateUser = (username) => {
  //   return fetch(this.api + "/users", {
  //     method: 'POST', 
  //     headers: { 
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({username}),
  //   })
  //   .then(response => response.json())
  // }
}

