describe('GameView', () => {
  describe('on startGame', () => {
    beforeEach(() => {
      game = new Game('Joshua')
      onEndGame = winner => winner.length
      view = new GameView((onEndGame), game)
      container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
    });

    it('will place the player\'s name on the screen', () => {
      expect(container.textContent).toContain('Joshua')
      container.remove()
    });

    it('will render all 20 cards in play at the beginning of the game', () => {
      const cardElements = document.querySelectorAll('img')
      const numberOfTotalStartingCards = 20
      expect(cardElements.length).toEqual(numberOfTotalStartingCards)
      container.remove()
    });
  });
});
