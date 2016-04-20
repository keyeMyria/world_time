import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Layout from 'views/layout/layout';

describe('Layout', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<Layout />);
  })

  it('renders', () => {
    expect(page).toExist();
  })

})
