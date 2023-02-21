import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {
  connect() {
    console.log(this.element)
  }

  toggle(e) {
    // e.preventDefault()
    const id = e.target.dataset.id
    const csrfToken = document.querySelector("[name='csrf-token']").content

    fetch(`/tasks/${id}/toggle`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ completed: e.target.checked }) // body data type must match "Content-Type" header
    })
      .then((response) => response.text())
      .then(data => {
        const newElement = document.createElement("div")
        newElement.innerHTML = data
        e.target.replaceWith(newElement.firstChild)
        // data
      })
  }
}