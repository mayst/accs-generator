import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import {Sidebar} from "@/components";

describe('<App />', () => {
  test('renders Sidebar and Content', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Sidebar)).toHaveLength(1);
  })
});
