import React, { Component } from 'react';
import * as actions from '../../actions/index';
import Paginate from 'react-paginate';

class Leaderboard extends Component {

  componentWillMount() {
    this.props.getEntry(10, 0);
  }

  handlePageClick(data) {
    this.props.getEntry(10, data.selected * 10);
  }

  render() {
    let userElem = [];
    if(this.props.leaderboard[0] !== undefined) {
      for (let i = 0; i < this.props.leaderboard[0].length || 0; i++) {
        userElem.push(<div key={i}>{this.props.leaderboard[0][i].name}<span>{' ' + this.props.leaderboard[0][i].totalXp}</span></div>);
      }
    }
    return (
      <div>
        <h1>LEADERBOARD</h1>
        {userElem}
        <Paginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          pageNum={Math.ceil(this.props.leaderboard[1] / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick.bind(this)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }

}

export default Leaderboard;