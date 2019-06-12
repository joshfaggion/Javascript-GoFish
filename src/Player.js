class Player {
  constructor(name) {
    this.name = name
    this.cards = []
    this.pairs = []
    this.points = 0
  }

  takeCard(card) {
    if (Array.isArray(card)) {
      this.cards.push(...card)
    } else {
      this.cards.push(card)
    }
  }

  cardAmount() {
    return this.cards.length
  }

  returnCards() {
    return this.cards
  }

  returnName() {
    return this.name
  }

  setHand(...cards) {
    this.cards = cards
  }

  removeCardsByRank(rank) {
    this.cards = this.cards.filter(card => card.returnRank() !== rank)
  }

  cardInHand(desiredRank) {
    const matchingCards = []
    this.cards.forEach((card) => {
      if (card.rank === desiredRank) {
        matchingCards.push(card)
      }
    })
    if (matchingCards.length === 0) {
      return 'Go Fish!'
    }
    this.removeCardsByRank(desiredRank)
    return matchingCards
  }

  pairCards() {
    this.cards.forEach((originalCard) => {
      const matches = this.cards.filter(card => card.returnRank() === originalCard.returnRank())
      if (matches.length === 4) {
        // You only need the first card of the match to display
        this.pairs.push(matches[0].returnRank())
        this.cards = this.cards.filter(card => !matches.includes(card))
        this.points++
      }
    })
  }

  returnPoints() {
    return this.points
  }
}
