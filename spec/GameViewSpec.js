describe('GameView', () => {
  describe('on startGame', () => {
    it('will place the player\'s name on the screen', () => {
      const game = new Game('Joshua')
      const onEndGame = winner => winner.length
      const view = new GameView((onEndGame), game)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      // Check for the players title
      expect(container.textContent).toContain('Joshua')
      container.remove()
    });

    it('will render all 20 cards in play at the beginning of the game', () => {
      const game = new Game('Joshua')
      const onEndGame = winner => winner.length
      const view = new GameView(onEndGame, game)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)

      const cardElements = document.querySelectorAll('img')
      expect(cardElements.length).toEqual(20)
      container.remove()
    });
  });
});
