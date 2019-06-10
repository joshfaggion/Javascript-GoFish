describe('LoginView', () => {
  describe('form submit', () => {
    it('calls will return the player\'s name', () => {
      let target
      const onLogin = (name) => { target = name }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container);
      view.nameInput().value = 'Josh'
      view.submitButton().click()
      expect(target).toEqual('Josh')
      container.remove()
    })
  })
})
