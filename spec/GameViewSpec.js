describe('GameView', () => {
  describe('on startGame', () => {
    beforeEach(() => {
      game = new Game('Joshua')
      view = new GameView(null, game)
      container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
    });

    afterEach(() => {
      container.remove()
    });

    it('will place the player\'s name on the screen', () => {
      expect(container.textContent).toContain('Joshua')
      container.remove()
    });

    it('will render all 20 cards in play at the beginning of the game', () => {
      const cardElements = document.querySelectorAll('img')
      const numberOfTotalStartingCards = 20
      expect(document.querySelectorAll('img').length).toEqual(numberOfTotalStartingCards)
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

    afterEach(() => {
      container.remove()
    });

    it('will highlight a card on click', () => {
      const card = document.querySelector('.player-card')
      card.click()
      expect(document.querySelector('.player-card').classList).toContain('selected')
    });

    it('will highlight a title on click', () => {
      const botTitle = document.querySelector('.bot-div')
      botTitle.click()
      expect(document.querySelector('.bot-div').classList).toContain('selected')
    });


    it('will show the request a card from another play on click', () => {
      game.players[0].cards = [new Card('10', 's')]
      game.players[1].cards = [new Card('8', 's')]
      game.players[2].cards = [new Card('9', 'h')]
      game.players[3].cards = [new Card('j', 'c')]
      const botTitle = document.querySelector('.bot-div')
      const playerCard = document.querySelector('.player-card')
      const originalCardNumber = 1
      botTitle.click()
      playerCard.click()
      expect(document.querySelector('.request-button').textContent).toEqual('Request Card')
      document.querySelector('.request-button').click()
      expect(document.querySelectorAll('.player-card').length).toBeGreaterThan(originalCardNumber)
    });
  });
});
