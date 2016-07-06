import React, { Component, PropTypes } from 'react';
import { Line as LineChart } from 'react-chartjs';
import statsUtil from '../../util/statsUtil';

const lineChartOptions = {
  pointDotRadius: 2,
  bezierCurve: true,
  scaleShowVerticalLines: false,
  scaleGridLineColor: 'black',
};

class Stats extends Component {
  render() {
    return (
      <section>
        <h1>Stats</h1>
        <div className="health-scores">
          <div className="curr">
            Your current health status: {statsUtil.mapHealthScore(this.props.stats.healthScore)}
          </div>
          <div className="prediction">
            Your projected health status: {statsUtil.mapHealthScore(this.props.stats.prediction)}
          </div>
        </div>
        <div className="graphs">
          <div className="steps-graph">
            Your steps:<br></br>
            <LineChart
              data={this.props.stepsChartData}
              options={lineChartOptions}
              width="600" height="250"
              redraw
            />
          </div>
          <div className="sleep-graph">
            Your sleep:<br></br>
            <LineChart
              data={this.props.sleepChartData}
              options={lineChartOptions}
              width="600" height="250"
              redraw
            />
          </div>
          <div className="hr-graph">
            Your heart rate:<br></br>
            <LineChart
              data={this.props.hrChartData}
              options={lineChartOptions}
              width="600" height="250"
              redraw
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Stats;

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
  stepsChartData: PropTypes.object.isRequired,
  sleepChartData: PropTypes.object.isRequired,
  hrChartData: PropTypes.object.isRequired,
};
