class Game {
  constructor(playerName) {
    this.players = [
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(playerName)]
    this.deck = new Deck()
    this.initGame()
  }

  initGame() {
    this.deck.shuffle()
    this.players.forEach(player => player.takeCard(this.deck.dealHand()))
  }

  players() {
    return this.players
  }
}
