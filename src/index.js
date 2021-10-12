
const api = new ApiService("http://localhost:3000")

const modal = new Modal()




// Item.getItems()

// Listing.getSites()

document.querySelector("form").addEventListener("submit", handleUserSubmit)

function handleUserSubmit(e) {
  e.preventDefault()
  api.findOrCreateUser(e.target.username.value).then(console.log)
}