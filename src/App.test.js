import React from "react";
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';

// describe("App component", () => {
// 	test("renders Welcome to Not Amazon", () => {
// 		const { getByText } = render(<App />);
// 		const text = getByText(/Welcome to Not Amazon/i);
// 		expect(text).toBeInTheDocument();
// 	});
// });
import App from './App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
});

describe('<App/> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
  })
})
