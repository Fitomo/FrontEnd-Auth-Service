import React from 'react';
import { shallow } from 'enzyme';
import HealthBar from './healthPresenter';

describe('<Healthbar />', function () {
  it('should render health bars based on prop health', function () {
    const props = {
      type: 'loaded',
      health: 100,
      health2: 200,
    };
    const wrapper = shallow(<HealthBar  {...props}/>);
    expect(wrapper.find('div')).to.have.length(props.health + 2);
  });
  it('should have props for type and health', function () {
    const wrapper = shallow(<HealthBar />);
    expect(wrapper.props().type).to.be.defined;
    expect(wrapper.props().health).to.be.defined;
  });
});