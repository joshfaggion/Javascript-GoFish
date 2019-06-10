describe('Deck', () => {
  it('can have 52 cards', () => {
    const deck = new Deck()
    expect(deck.cardAmount).toEqual(52)
  });
});
