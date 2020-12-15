$.getJSON("https://ca-sample-api.herokuapp.com/things", records => {
    const recordsDiv = document.querySelector("#get")
    recordsDiv.innerHTML = ""

    for (let record of records){

        let p = document.createElement("p")
        p.innerHTML = `<p> id: ${record.id} </p> <p> Name: ${record.name} </p> <p> Description: ${record.description}`
        recordsDiv.appendChild(p)
    }
})  

//get

postForm = document.querySelector("#post")
postForm.addEventListener('submit', event => {
    event.preventDefault()
    fetch("https://ca-sample-api.herokuapp.com/things", {
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            name: postForm.name.value,
            description: postForm.description.value
        })
    })
    .then (res => res)
    .then (() => {
        location.reload()
        return false
    })
    .catch(error => console.log(error))
})

async function fetchDelete() {

}

deleteForm = document.querySelector("#delete")
deleteForm.addEventListener('submit', event => {
    event.preventDefault()
    fetch(`https://ca-sample-api.herokuapp.com/things/${deleteForm.delId.value}`, {
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'DELETE'
    })
    .then (() => {
        location.reload()
        return false
    })
    .catch(error => console.log(error))
})

editForm = document.querySelector("#edit")
editForm.addEventListener('submit', event => {
    event.preventDefault()
    fetch(`https://ca-sample-api.herokuapp.com/things/${editForm.edId.value}`, {
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'PUT',
        body: JSON.stringify({
            name: editForm.name.value,
            description: editForm.description.value
        })
    })
    .then (res => res)
    .then (() => {
        location.reload()
        return false
    })
    .catch(error => console.log(error))
})


