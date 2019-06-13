class EndView {
  constructor(game) {
    this.game = game
    this.results = game.results()
  }

  draw(container) {
    container.innerHTML = ''
    const formHTML = `
    ${this.game.players.map(player => `<div><h3>${player.returnName()} had ${player.returnPoints()} points!</h3></div>`).join('')}
    <div><h2>Congrats ${this.game.winner()}!</h2></div>
    <button class='play-again-button'>Play Again?</button>
    `
    const element = document.createElement('div')
    element.innerHTML = formHTML
    container.appendChild(element)
    document.querySelector('.play-again-button').onclick = window.location.reload.bind(window.location)
  }
}
