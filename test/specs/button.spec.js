import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Button from '../../src/packages/button'

describe('Button.vue', () => {
  it('type primary', done => {
    const wrapper = mount(Button, {
      propsData: {
        type: "primary"
      }
    })
    
    let buttonElm = wrapper.element;
    expect(buttonElm.classList.contains('ml-button--primary')).to.be.true;
    done()
  })

  it('size small', done => {
    const wrapper = mount(Button, {
      propsData: {
        size: "small"
      }
    })
    expect(wrapper.props('size')).equal('small');
    done()
  })
})