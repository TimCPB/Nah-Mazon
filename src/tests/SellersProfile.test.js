import React from 'react';
import { shallow } from 'enzyme';
import SellersProfile from '../components/SellersProfile'

it("renders correctly", () => {
  const wrapper = shallow(<SellersProfile />);
  expect(wrapper).toHaveLength(1);
});