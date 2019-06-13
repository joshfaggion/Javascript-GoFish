class EndView {
  constructor(game) {
    this.game = game
  }

  draw(container) {
    container.innerHTML = ''
    const formHTML = `
    <h1>Welcome to the End Game!</h1>`

    const element = document.createElement('div')
    element.innerHTML = formHTML
    container.appendChild(element)
  }
}
