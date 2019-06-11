class Game {
  constructor(player) {
    this.players = [
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(player)]
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
