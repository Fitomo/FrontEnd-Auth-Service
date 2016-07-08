const expect = require('chai').expect;
import { shallow } from 'enzyme';
import Stats from './statsPresenter';

describe('Stats', () => {
  const chartData = {
    labels: [],
    datasets: [
      { fillColor: 'rgba(15,28,47,0.2)',
        strokeColor: 'rgba(15,28,47,0.2)',
        pointColor: 'rgba(15,28,47,0.2)',
        data: [] },
    ],
  };
  const props = {
    user: {},
    stats: {},
    stepsChartData: chartData,
    sleepChartData: chartData,
    hrChartData: chartData,
  };
  it('renders two predictions', () => {
    const wrapper = shallow(<Stats {...props} />);
    const children = wrapper.find('.health-scores').node.props.children;
    expect(children).to.have.length(2);
  });
  it('renders three graphs', () => {
    const wrapper = shallow(<Stats {...props} />);
    const children = wrapper.find('.graphs').node.props.children;
    expect(children).to.have.length(3);
  });
});
