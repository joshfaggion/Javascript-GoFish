class Game {
  constructor(playerName) {
    this.playerName = playerName
    this.players = [
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(Names.name()),
      new Player(playerName)]
    this.deck = new Deck()
    this.turn = 0
    this.log = []
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
    return `${requestingPlayer.returnName()} went fishing!`
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
    }
  }

  runPlayerRound(playerName, targetName, rank) {
    const player = this.findPlayerByName(playerName)
    const target = this.findPlayerByName(targetName)
    const result = this.runRequest(player, target, rank)
    player.pairCards()
    this.cardRefills()
    this.log.push(result)
    if (this.log.length > 10) {
      this.log.shift()
    }
    return result
  }

  runBotRound(player) {
    const targetRank = player.cards[Math.floor(Math.random() * player.cardAmount())].returnRank()
    let targetPlayer = player
    while (targetPlayer === player) {
      targetPlayer = this.players[Math.floor(Math.random() * this.players.length)]
    }
    const result = this.runRequest(player, targetPlayer, targetRank)
    this.log.push(result)
    if (this.log.length > 10) {
      this.log.shift()
    }
    return result
  }

  runAllBotTurns() {
    for (const player of this.players) {
      if (player.returnName() !== this.playerName) {
        this.runBotRound(player)
      }
    }
  }

  gameLog() {
    return this.log
  }
}
