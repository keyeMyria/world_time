import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Header from 'views/layout/header';

describe('Header', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<Header />);
  })

  it('renders', () => {
    expect(page).toExist();
  })

})
