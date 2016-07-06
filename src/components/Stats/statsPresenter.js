import React, { Component } from 'react';
import { Line as LineChart, Radar as RadarChart } from 'react-chartjs';
import statsUtil from '../../util/statsUtil';

const lineChartOptions = {
  pointDotRadius: 2,
  bezierCurve: true,
  scaleShowVerticalLines: false,
  scaleGridLineColor: 'black',
};

class Stats extends Component {
  componentWillMount() {
    // this.props.getStats(this.props.user.id, this.props.user.device);
  }

  render() {
    return (
      <section>
        <h1>Stats</h1>
        <div className="prediction">
          Your current health status: {statsUtil.mapHealthScore(this.props.stats.healthScore)} <br></br>
          Your projected health status: {statsUtil.mapHealthScore(this.props.stats.prediction)}
        </div>
        <div className="graphs">
          Your steps:<br></br>
          <LineChart
            data={this.props.stepsChartData}
            options={lineChartOptions}
            width="600" height="250"
            redraw
          /><br></br>
          Your sleep:<br></br>
          <LineChart
            data={this.props.sleepChartData}
            options={lineChartOptions}
            width="600" height="250"
            redraw
          /><br></br>
          Your heart rate:<br></br>
          <LineChart
            data={this.props.hrChartData}
            options={lineChartOptions}
            width="600" height="250"
            redraw
          />
        </div>
      </section>
    );
  }
}

export default Stats;
