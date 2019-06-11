describe('Player', () => {
  it('can take the top card from the deck', () => {
    const player = new Player('Jim')
    const card = new Card('Ace', 'Hearts')
    player.takeCard(card)
    expect(player.cardAmount()).toEqual(1)
    expect(player.cards).toEqual([card])
  });
});
