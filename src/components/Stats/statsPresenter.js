import React, { Component } from 'react';
// import Chart from 'chart.js';
import { Line as LineChart, Radar as RadarChart } from 'react-chartjs';

// Chart.defaults.global = {
//   animationSteps: 50,
//   tooltipYPadding: 16,
//   tooltipCornerRadius: 0,
//   tooltipTitleFontStyle: 'normal',
//   tooltipFillColor: 'rgba(0,160,0,0.8)',
//   animationEasing: 'easeOutBounce',
//   scaleLineColor: 'black',
//   scaleFontSize: 16,
//   responsive: true,
// };

const lineChartOptions = {
  pointDotRadius: 10,
  bezierCurve: false,
  scaleShowVerticalLines: false,
  scaleGridLineColor: 'black',
};

class Stats extends Component {
  componentWillMount() {
    // this.props.getStats(this.props.user.id, this.props.user.device);
  }

  render() {
    return (
      <div>
        Stats page
        <div className="prediction">
          You are currently: {this.props.stats.healthScore} <br></br>
          You are projected to be: {this.props.stats.prediction}
        </div>
        <div className="graphs">
          Your current stats: {this.props.stats.data}
          {this.props.lineChartData.labels}
          <LineChart
            data={this.props.lineChartData}
            options={lineChartOptions}
            width="600" height="250"
            redraw
          />
        </div>
      </div>
    );
  }
}

export default Stats;
