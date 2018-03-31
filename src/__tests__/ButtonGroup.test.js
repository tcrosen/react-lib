import 'raf/polyfill';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonGroup from '../ButtonGroup';

configure({ adapter: new Adapter() });

describe('ButtonGroup', function() {
  it('should render a div element', function() {
    const actual = mount(<ButtonGroup />).find('div').length;
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  it('should render children', function() {
    const actual = mount(<ButtonGroup>test</ButtonGroup>).text();
    const expected = 'test';
    expect(actual).toEqual(expected);
  });
});
