import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sample extends Component {

  componentDidUpdate() {

  }

  render () {
    var sampleData = this.props.sample;
    console.log('THE TRACKS', sampleData);
    return (
      <div>
      <h1>HELLO</h1>
        <div>
          {
            sampleData.map((track, key) => {
              return (
                <div className="track" key={key}>
                  {track.title}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default Sample;