describe('GameSpec', () => {
  it('can construct a new game', () => {
    const game = new Game('Joshua')
    expect(game.returnPlayers().length).toEqual(4)
  });

  it('can find a player by name', () => {
    const game = new Game('Joshua')
    const player = game.findPlayerByName('Joshua')
    expect(player.name).toEqual('Joshua')
    expect(player.constructor.name).toEqual('Player')
  });
});
