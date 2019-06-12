describe('GameView', () => {
  describe('on startGame', () => {
    beforeEach(() => {
      game = new Game('Joshua')
      view = new GameView(null, game)
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

  describe('mid game', () => {
    beforeEach(() => {
      game = new Game('Joshua')
      view = new GameView(null, game)
      container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
    });

    it('will highlight a card on click', () => {
      const card = document.querySelector('.player-card')
      card.click()
      expect(document.querySelector('.player-card').classList).toContain('selected')
      container.remove()
    });

    it('will highlight a title on click', () => {
      const botTitle = document.querySelector('.bot-div')
      botTitle.click()
      expect(document.querySelector('.bot-div').classList).toContain('selected')
      container.remove()
    });


    it('will show the request button when both a title and card are selected', () => {
      const botTitle = document.querySelector('.bot-div')
      const playerCard = document.querySelector('.player-card')
      botTitle.click()
      playerCard.click()
      expect(document.querySelector('.request-button').textContent).toEqual('Request Card')
      container.remove()
    });
  });
});
