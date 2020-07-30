import React from 'react';
import { shallow } from 'enzyme';
import BusinessProfile from '../components/BusinessProfile'

it("renders correctly", () => {
  const wrapper = shallow(<BusinessProfile />);
  expect(wrapper).toHaveLength(1);
});