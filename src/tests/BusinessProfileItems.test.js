import React from 'react';
import { shallow } from 'enzyme';
import BusinessProfileItems from '../components/BusinessProfileItems'

it("renders correctly", () => {
  const wrapper = shallow(<BusinessProfileItems />);
  expect(wrapper).toHaveLength(1);
});