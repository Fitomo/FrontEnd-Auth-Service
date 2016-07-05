const expect = require('chai').expect;
import { shallow } from 'enzyme';
import Stats from './statsPresenter';

describe('Stats', () => {
  it('renders three graphs', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.find('.graphs')).to.have.length(3);
  });
  it('renders two predictions', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper.find('.health-scores')).to.have.length(2);
  });
});
