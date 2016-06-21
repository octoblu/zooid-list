import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import List from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<List />', () => {
  describe('when given children as prop', () => {
    it('should render the children', () => {
      const sut = shallow(
        <List>
          <li>Hotline Bling!</li>
        </List>
      )
      expect(sut).to.contain(<li>Hotline Bling!</li>)
    })
  })

  describe('when given className as prop', () => {
    it('should merge classNames', () => {
      const sut = shallow(<List className="Fancy" />)
      expect(sut).to.have.className('Fancy')
    })
  })

  describe('when given unstyled as a prop', () => {
    it('should merge', () => {
    })
  })
})
