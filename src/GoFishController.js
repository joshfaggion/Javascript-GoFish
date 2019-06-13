class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name) {
    const game = new Game(name)
    const view = new GameView(this.endGame.bind(this), game)
    view.draw(this.container())
  }

  endGame(game) {
    const view = new EndView(game)
    view.draw(this.container())
  }
}

window.controller = new GoFishController()
// This is the normal controller setup
window.onload = controller.login.bind(window.controller)

// Uncommenting this line will make the page start at the endView
// window.onload = controller.endGame.bind(window.controller, new Game('Joshua').finishGame())
