import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TimeLine from 'views/main/timeline';

describe('TimeLine', function () {
  it('renders', function () {
    let page = TestUtils.renderIntoDocument(<TimeLine />);
    expect(page).toExist();
  });
});
