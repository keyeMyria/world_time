import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Notfound from 'views/shared/not_found';

describe('Notfound', function () {
  it('renders', function () {
    let page = TestUtils.renderIntoDocument(<Notfound />);
    expect(page).toExist();
  });
});
