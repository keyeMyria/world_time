import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Login from 'views/users/login';

describe('Login', () => {
  let page

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<Login />);
  })

  it('renders', () => {
    expect(page).toExist();
  })

})
