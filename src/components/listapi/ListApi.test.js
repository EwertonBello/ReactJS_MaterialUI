import React from 'react';
import { shallow } from 'enzyme';
import ListApi from './ListApi';

describe('<ListApi />', () => {
  test('renders', () => {
    const wrapper = shallow(<ListApi />);
    expect(wrapper).toMatchSnapshot();
  });
});
