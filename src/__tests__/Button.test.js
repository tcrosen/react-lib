import 'raf/polyfill';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter() });

describe('Button', function() {
  it('should render a button element', function() {
    const actual = mount(<Button />).find('button').length;
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  it('should render children', function() {
    const actual = mount(<Button>test</Button>).text();
    const expected = 'test';
    expect(actual).toEqual(expected);
  });
});
