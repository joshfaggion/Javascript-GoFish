describe('EndView', () => {
  it('can render the player\'s name', () => {
    const game = new Game('Joshua').finishGame()
    view = new EndView(game)
    container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
    expect(document.body.textContent).toContain('Joshua had')
    container.remove()
  });
});
