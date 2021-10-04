class ApiService {

  constructor(api){
    this.api = api
  }

  getItems = () => fetch(this.api + "/items").then(response => response.json())
}