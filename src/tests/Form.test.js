// import { shallow, mount, render } from 'enzyme';
//
// import Form from './Form';
//
// const wrapper = shallow(<Form />);

import React from 'react';
import { mount } from 'enzyme';
import CreateItem from '../components/CreateItem';

xit('calls onSubmit prop function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<CreateItem onSubmit={onSubmitFn} />);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
