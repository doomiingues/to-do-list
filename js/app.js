const form = document.querySelector("#new-item")
const list = document.querySelector("#list")


form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const name = e.target.elements['task-name']

    name.value = ""
    console.log(name)
})

function createElement (item) {
    const newItem = document.createElement('li')
    newItem.classList.add("item")

    newItem.innerHTML += item.name
    list.appendChild(newItem)

}