describe('GameView', () => {
  describe('on startGame', () => {
    it('will place the player\'s name on the screen', () => {
      const game = new Game('Joshua')
      const onEndGame = winner => winner.length
      const view = new GameView((onEndGame), game);
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      // Check for the players title
      expect(container.textContent).toContain('Joshua')
      container.remove()
    });

    it('will render five cards in the player\'s hand', () => {
      const game = new Game('Joshua')
      const onEndGame = winner => winner.length
      const view = new GameView(onEndGame, game);
      const container = document.createElement('div')
    });
  });
});
