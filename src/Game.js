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

  returnPlayers() {
    return this.players
  }

  findPlayerByName(name) {
    for (const player of this.players) {
      if (name === player.name) {
        return player
      }
    }
    return 'That player was not found'
  }

  // runRound(requestingPlayer, targetPlayer, requestedRank) {
  //
  // }
}
