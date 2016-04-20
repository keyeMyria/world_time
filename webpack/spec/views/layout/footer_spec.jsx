import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Footer from 'views/layout/footer';

describe('Footer', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<Footer />);
  })

  it('renders', () => {
    expect(page).toExist();
  })

  it('has World Time - Web Application', () => {
    let h1 = TestUtils.findRenderedDOMComponentWithTag(page, 'span')
    expect(h1.getDOMNode().textContent).toInclude("World Time - Web Application")
  })

})
