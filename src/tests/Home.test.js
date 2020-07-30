import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home'

it("renders correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toHaveLength(1);
});