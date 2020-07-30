import React from 'react';
import { shallow } from 'enzyme';
import CreateItem from '../components/CreateItem'

it("renders correctly", () => {
  const wrapper = shallow(<CreateItem />);
  expect(wrapper).toHaveLength(1);
});