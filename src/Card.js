class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  imgCompatible(selectedCard) {
    if (selectedCard === this.rank) {
      return `<img name='${this.rank}' class='player-card selected' src=public/img/${this.suit}${this.rank}.png />`
    }
    return `<img name='${this.rank}' class='player-card' src=public/img/${this.suit}${this.rank}.png />`
  }

  static cardBackImg() {
    return '<img src=public/img/backs_blue.png />'
  }

  returnRank() {
    return this.rank
  }

  returnSuit() {
    return this.suit
  }
}
