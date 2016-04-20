import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import ReactSpinner from 'views/shared/spinner';

describe('ReactSpinner', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<ReactSpinner />);
  })

  it('renders', () => {
    expect(page).toExist();
  })

})
