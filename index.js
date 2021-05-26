// Write your code here!
let m = document.querySelector("main")
m.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Dina is the champion"

document.body.appendChild(newHeader)

