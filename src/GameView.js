class GameView {
  constructor(onEndGame, game) {
    this.onEndGame = onEndGame
    this.game = game
    this.selectedPlayer = ''
    this.selectedCard = ''
    this.container = ''
  }

  renderHand(player) {
    const userIndex = 3
    if (player.name === this.game.players[userIndex].name) {
      return player.cards.map(card => card.imgCompatible(this.selectedCard))
    }
    return player.cards.map(() => Card.cardBackImg())
  }

  renderPlayer(player) {
    let id = 'bot' // by default
    const userIndex = 3
    if (player.returnName() === this.game.players[userIndex].returnName()) {
      id = 'player'
    }
    if (player.returnName() === this.selectedPlayer) {
      return `<div class='${id}-div selected' id='${player.returnName()}'>
        <u><h3>${player.returnName()}</h3> </u> ${this.renderHand(player).join(' ')}
      </div>
      `
    }
    return `<div class='${id}-div' id='${player.returnName()}'>
      <u><h3>${player.returnName()}</h3> </u> ${this.renderHand(player).join(' ')}
    </div>`
  }

  bindCardsAndPlayers() {
    const cards = document.querySelectorAll('.player-card')
    const botDivs = document.querySelectorAll('.bot-div')

    cards.forEach((card) => {
      card.onclick = this.cardClicked.bind(this, card)
    })
    botDivs.forEach((bot) => {
      bot.onclick = this.botClicked.bind(this, bot)
    })
    if (document.querySelector('.request-button') !== null) {
      document.querySelector('.request-button').onclick = this.requestCardClicked.bind(this)
    }
  }

  cardClicked(clickedCard) {
    this.selectedCard = clickedCard.name
    this.draw(this.container)
  }

  botClicked(clickedPlayer) {
    this.selectedPlayer = clickedPlayer.id
    this.draw(this.container)
  }

  requestCardClicked() {
    const result = this.game.runPlayerRound(this.game.playerName, this.selectedPlayer, this.selectedCard)
    if (result.includes('fishing')) {
      this.game.runAllBotTurns()
    }
    this.selectedCard = ''
    this.selectedPlayer = ''
    this.draw(this.container)
  }

  draw(container) {
    container.innerHTML = ''
    const element = document.createElement('div')
    const buttonMarkup = '<div class=\'button-div\'><button class=\'request-button\'>Request Card</button></div>'
    const gameMarkup = `
    ${this.game.players.map(player => this.renderPlayer(player)).join('')}
    ${(this.selectedPlayer !== '' && this.selectedCard !== '') ? buttonMarkup : ''}
    <div class='game-log'>
    ${this.game.gameLog().join('<br>')}
     </div>`
    element.innerHTML = gameMarkup
    container.appendChild(element)
    this.bindCardsAndPlayers()
    this.container = container
    return element
  }
}
