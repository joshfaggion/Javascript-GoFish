class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  imgCompatible() {
    return `<img src=public/img/${this.rank}${this.suit}.png />`
  }

  static cardBackImg() {
    return '<img src=public/img/backs_blue.png />'
  }
}
