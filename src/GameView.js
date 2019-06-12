class GameView {
  constructor(onEndGame, game) {
    this.onEndGame = onEndGame
    this.game = game
  }

  handHTML(player) {
    const userIndex = 3
    if (player.name === this.game.players[userIndex].name) {
      return player.cards.map(card => card.imgCompatible())
    }
    return player.cards.map(() => Card.cardBackImg())
  }

  cardClicked(rank) {
    console.log(rank)
  }

  titleClicked(title) {
    console.log(title)
  }

  titleHTML(player) {
    const userIndex = 3
    if (player.returnName() === this.game.players[userIndex].returnName()) {
      return `<u> <h2 class='player-title'> ${player.returnName()} </h2> </u>`
    }
    return `<u> <h2 class='bot-title' id='${player.returnName()}'> ${player.name} </h2> </u>`
  }

  draw(container) {
    const element = document.createElement('div')
    const state = `
    <h1>
      Go Fish
    </h1>
    <div>
      ${this.game.players.map((player) => {
    const playerHTML = this.titleHTML(player)
    const handHTML = this.handHTML(player)
    return playerHTML + handHTML
  }).join(' ')}
    </div>
    `
    element.innerHTML = state
    container.appendChild(element)
    document.querySelectorAll('.player-card').forEach((card) => {
      card.onclick = this.cardClicked.bind(this, card.name)
    })
    document.querySelectorAll('.bot-title').forEach((title) => {
      title.onclick = this.titleClicked.bind(this, title.id)
    })
    return element
  }
}
