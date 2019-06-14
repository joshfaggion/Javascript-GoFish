class LoginView {
  constructor(onLogin) {
    this._onLogin = onLogin
  }

  nameInput() {
    return document.getElementById('name')
  }

  onSubmit(event) {
    event.preventDefault();
    this._onLogin(event.target.name.value)
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formHTML = `
    <form class="user-form">
      <label for="name">Name</label>
      <input value='Reginald' type="text" id="name" />
      <input id="submit" type="submit" value="Login">
    </form>`
    const element = document.createElement('div')
    element.innerHTML = formHTML
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
