import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import ListItem from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<ListItem />', () => {
  it('should render with default styling', () => {
    const sut = shallow(<ListItem>Hotline Bling!</ListItem>)
    expect(sut).to.have.className(styles.root)
  })

  describe('when given children as prop', () => {
    it('should render the children', () => {
      const sut = shallow(<ListItem>Hotline Bling!</ListItem>)
      expect(sut).to.contain('Hotline Bling!')
    })
  })

  describe('when given className as prop', () => {
    it('should merge classNames', () => {
      const sut = shallow(<ListItem className="Fancy" />)
      expect(sut).to.have.className('Fancy')
    })
  })
})
