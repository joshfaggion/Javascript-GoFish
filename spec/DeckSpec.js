describe('Deck', () => {
  it('can initialize with a full 52 card deck', () => {
    const deck = new Deck()
    expect(deck.cardAmount()).toEqual(52)
  });

  it('can shuffle the cards', () => {
    const deck = new Deck()
    const cards = [...deck.cards()]
    deck.shuffle()
    expect(deck.cards()).not.toEqual(cards)
  });

  it('can take the top card', () => {
    const deck = new Deck()
    card = deck.topCard()
    expect(deck.cardAmount()).toEqual(51)
    // constructor.name gives the class name of whatever it is called on
    expect(card.constructor.name).toEqual('Card')
  });

  it('can deal five cards to a player ', () => {
    const deck = new Deck()
    const dealtCards = deck.dealHand()
    // Deal hand returns the top five cards
    expect(deck.cardAmount()).toEqual(47)
    expect(dealtCards.length).toEqual(5)
  });
});
