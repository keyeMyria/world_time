import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TimeLine from 'views/main/timeline';

describe('TimeLine', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<TimeLine />);
    expect(page).toExist();
  });




});
