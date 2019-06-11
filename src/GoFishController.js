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

  endGame() {
    const view = new EndView()
    view.draw(this.container())
  }
}

window.controller = new GoFishController()
window.onload = controller.login.bind(window.controller)
