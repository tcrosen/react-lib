import 'raf/polyfill';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactLibComponent from '../ReactLibComponent';

configure({ adapter: new Adapter() });

describe('A suite', function() {
  it('should render a span', function() {
    const actual = mount(<ReactLibComponent />).find('span').length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
