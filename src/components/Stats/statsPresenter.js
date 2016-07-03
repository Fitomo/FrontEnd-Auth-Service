import React, { Component } from 'react';

class Stats extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <section>
        Stats page
        <div className="graphs">
          Graphs
        </div>
        <div className="classification">
          Classifications
        </div>
      </section>
    );
  }
}

export default Stats;
