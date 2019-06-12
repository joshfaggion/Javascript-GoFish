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

  runRequest(requestingPlayer, targetPlayer, requestedRank) {
    // all these parameters are already objects at this points
    const result = targetPlayer.cardInHand(requestedRank)
    if (result !== 'Go Fish!') {
      requestingPlayer.takeCard(result)
      return `${requestingPlayer.returnName()} took all the ${requestedRank}s from ${targetPlayer.returnName()}!`
    }
    // If the result is Go Fish!
    requestingPlayer.takeCard(this.deck.topCard())
    return `${requestingPlayer.returnName()} failed to get a single dippety card! Go fishing in a lake, hippie!`
  }

  findPlayerByName(name) {
    for (const player of this.players) {
      if (name === player.name) {
        return player
      }
    }
    return 'That player was not found'
  }

  cardRefills() {
    for (const player of this.players) {
      if (player.cardAmount() === 0) {
        player.takeCard(this.deck.dealHand())
      }
      // If the deck runs out of cards, delete all the null cards added
      // for (const card in player.returnCards()) {
      //   if (player.cards[card] === null) {
      //     player.cards.splice(card, card)
      //   }
      // }
    }
  }

  runRound(playerName, targetName, rank) {
    const player = this.findPlayerByName(playerName)
    const target = this.findPlayerByName(targetName)
    const result = this.runRequest(player, target, rank)
    player.pairCards()
    this.cardRefills()
    return result
  }
}
