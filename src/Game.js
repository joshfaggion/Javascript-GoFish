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
      return `${requestingPlayer.returnName()} took all the ${requestedRank}'s from ${targetPlayer.returnName()}!`
    }
    // If the result is Go Fish!
    if (this.deck.cardAmount() > 0) {
      requestingPlayer.takeCard(this.deck.topCard())
    }
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
    if (this.deck.cardAmount() > 0) {
      for (const player of this.players) {
        if (player.cardAmount() === 0) {
          player.takeCard(this.deck.dealHand())
        }
      }
    }
  }

  runPlayerRound(playerName, targetName, rank) {
    const [player, target] = [this.findPlayerByName(playerName), this.findPlayerByName(targetName)]
    const result = this.runRequest(player, target, rank)
    player.pairCards()
    this.cardRefills()
    this.log.push(result)
    if (this.log.length > 10) {
      this.log.shift()
    }
    return result
  }

  anyPlayersHaveCards() {
    let anyPlayers = false
    for (const player of this.players) {
      if (player.cardAmount() > 0) {
        anyPlayers = true
      }
    }
    return anyPlayers
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
    player.pairCards()
    return result
  }

  runAllBotTurns() {
    const user = this.findPlayerByName(this.playerName)
    if (user.cardAmount() === 0) {
      while (this.anyPlayersHaveCards()) {
        for (const player of this.players) {
          if (player.cardAmount() > 0) {
            this.runBotRound(player)
          }
        }
      }
    }
    for (const player of this.players) {
      if (player.returnName() !== this.playerName) {
        if (player.cardAmount() > 0) {
          this.runBotRound(player)
        }
      }
    }
  }

  gameLog() {
    return this.log
  }

  finishGame() {
    this.deck.setDeck([])
    this.players.forEach(player => player.setHand([]))
    return this
  }

  results() {
    return this.players.map(player => player.returnPoints())
  }

  winner() {
    let winnersPoints = 0
    let winner = ''
    this.players.forEach((player) => {
      if (player.returnPoints() > winnersPoints) {
        [winnersPoints, winner] = [player.returnPoints(), player.returnName()]
      }
    })
    return winner
  }
}
