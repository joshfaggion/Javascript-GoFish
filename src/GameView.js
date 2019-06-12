class GameView {
  constructor(onEndGame, game) {
    this.onEndGame = onEndGame
    this.game = game
    this.selectedPlayer = ''
    this.selectedCard = ''
  }

  renderHand(player) {
    const userIndex = 3
    if (player.name === this.game.players[userIndex].name) {
      return player.cards.map(card => card.imgCompatible())
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
    const markup = `<div class='${id}-div' id='${player.returnName()}'>
      ${this.renderTitle(player) + this.renderHand(player).join(' ')}
    </div>
    `
    return markup
  }

  cardClicked(clickedCard, cards) {
    cards.forEach(card => card.classList.remove('selected'))
    clickedCard.classList.add('selected')
    this.selectedCard = clickedCard.name
    console.log(this.selectedCard)
  }

  titleClicked(clickedPlayer, players) {
    players.forEach(player => player.classList.remove('selected'))
    clickedPlayer.classList.add('selected')
    this.selectedPlayer = clickedPlayer.id
    console.log(this.selectedPlayer)
  }

  draw(container) {
    const element = document.createElement('div')
    const state = `
    <h1>
      Go Fish
    </h1>
    ${this.game.players.map(player => this.renderPlayer(player)).join('')}
    `
    element.innerHTML = state
    container.appendChild(element)
    const cards = document.querySelectorAll('.player-card')
    const botDivs = document.querySelectorAll('.bot-div')
    cards.forEach((card) => {
      card.onclick = this.cardClicked.bind(this, card, cards)
    })
    botDivs.forEach((bot) => {
      bot.onclick = this.titleClicked.bind(this, bot, botDivs)
    })
    return element
  }
}
