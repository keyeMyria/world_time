import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Clock from 'views/main/clock';

describe('clock', function () {
  it('renders', function () {
    let clock = TestUtils.renderIntoDocument(<Clock />);
    expect(clock).toExist();
  });
});
