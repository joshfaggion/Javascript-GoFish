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


  renderTitle(player) {
    const userIndex = 3
    if (player.returnName() === this.game.players[userIndex].returnName()) {
      return `<u> <h2 class='player-title'> ${player.returnName()} </h2> </u>`
    }
    return `<u> <h2 class='bot-title'> ${player.name} </h2> </u>`
  }

  renderPlayer(player) {
    let id = 'bot' // by default
    const userIndex = 3
    if (player.returnName() === this.game.players[userIndex].returnName()) {
      id = 'player'
    }
    if (player.returnName() === this.selectedPlayer) {
      return `<div class='${id}-div selected' id='${player.returnName()}'>
        ${this.renderTitle(player) + this.renderHand(player).join(' ')}
      </div>
      `
    }
    return `<div class='${id}-div' id='${player.returnName()}'>
      ${this.renderTitle(player) + this.renderHand(player).join(' ')}
    </div>`
  }

  renderRequestButtonIfNeeded() {
    if (this.selectedPlayer !== '' && this.selectedCard !== '') {
      this.draw(document.querySelector('#main'))
    }
  }

  cardClicked(clickedCard, cards) {
    this.selectedCard = clickedCard.name
    this.draw(this.container)
  }

  botClicked(clickedPlayer, players) {
    this.selectedPlayer = clickedPlayer.id
    this.draw(this.container)
  }

  draw(container) {
    container.innerHTML = ''
    const element = document.createElement('div')
    const buttonMarkup = '<div class=\'button-div\'><button class=\'request-button\'>Request Card</button></div>'
    const state = `
    <h1>
      Go Fish
    </h1>
    ${this.game.players.map(player => this.renderPlayer(player)).join('')}
    ${(this.selectedPlayer !== '' && this.selectedCard !== '') ? buttonMarkup : ''}
    `
    element.innerHTML = state
    container.appendChild(element)
    const cards = document.querySelectorAll('.player-card')
    const botDivs = document.querySelectorAll('.bot-div')
    cards.forEach((card) => {
      card.onclick = this.cardClicked.bind(this, card, cards)
    })
    botDivs.forEach((bot) => {
      bot.onclick = this.botClicked.bind(this, bot, botDivs)
    })
    this.container = container
    return element
  }
}
