import React from 'react';
import { shallow } from 'enzyme';
import ListAllItems from '../components/ListAllItems'

it("renders correctly", () => {
  const wrapper = shallow(<ListAllItems />);
  expect(wrapper).toHaveLength(1);
});