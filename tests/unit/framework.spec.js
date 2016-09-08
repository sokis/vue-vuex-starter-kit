import Vue from 'vue'
import VApp from 'App'

describe('App.vue', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.removeChild(el)
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el,
      replace: false,
      template: '<v-app></v-app>',
      components: {
        VApp
      }
    })
    expect(vm.$children.length).to.equal(1)
    // expect(vm.$children[0].$children[0].$children[0].$el.textContent).to.equal('Vue Vuex Starter Kit')
  })
})