describe('GameSpec', () => {
  it('can construct a new game', () => {
    const game = new Game('Joshua')
    expect(game.players().length).toEqual(4)
  });
});
