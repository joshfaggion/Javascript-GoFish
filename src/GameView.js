class GameView {
  constructor(onEndGame, game) {
    this.onEndGame = onEndGame
    this.game = game
  }

  handHTML(player) {
    if (player.name === this.game.players[3].name) {
      return player.cards.map(card => card.imgCompatible())
    }
    return player.cards.map(() => Card.cardBackImg())
  }

  draw(container) {
    const element = document.createElement('div')
    const state = `
    <h1>
      Go Fish
    </h1>
    ${this.game.players.map((player) => {
    const playerHTML = `<u> <h2> ${player.name} </h2> </u>`
    const handHTML = this.handHTML(player)
    return playerHTML + handHTML
  }).join(' ')}
    `
    element.innerHTML = state
    container.appendChild(element)
    return element
  }
}
