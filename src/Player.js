class Player {
  constructor(name) {
    this.name = name
    this.cards = []
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

  cards() {
    return this.cards
  }

  name() {
    return this.name
  }
}
