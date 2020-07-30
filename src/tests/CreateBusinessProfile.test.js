import React from 'react';
import { shallow } from 'enzyme';
import CreateBusinessProfile from '../components/CreateBusinessProfile'

it("renders correctly", () => {
  const wrapper = shallow(<CreateBusinessProfile />);
  expect(wrapper).toHaveLength(1);
});