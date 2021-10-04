console.log("I'm working just fine if your console show this")

fetch("http://localhost:3000/items").then(resp=>resp.json()).then(console.log)