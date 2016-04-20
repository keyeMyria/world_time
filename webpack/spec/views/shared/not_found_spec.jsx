import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Notfound from 'views/shared/not_found';

describe('Notfound', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<Notfound />);
	})

  it('renders', () => {
    expect(page).toExist();
  })

  it('has Error, page not found', () => {
    let h1 = TestUtils.findRenderedDOMComponentWithTag(page, 'div')
    expect(h1.getDOMNode().textContent).toInclude("Error, page not found")
  })

  it('has Get main page', () => {
    let h1 = TestUtils.findRenderedDOMComponentWithTag(page, 'a')
    expect(h1.getDOMNode().textContent).toEqual("Get main page")
  })

})
