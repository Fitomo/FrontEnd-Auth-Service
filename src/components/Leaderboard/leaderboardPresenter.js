import React, { Component } from 'react';
import Paginate from 'react-paginate';

class Leaderboard extends Component {

  componentWillMount() {
    this.props.getEntry(10, 0);
  }

  handlePageClick(data) {
    this.props.getEntry(10, data.selected * 10);
  }

  handleRowClick(userId) {
    if (userId === this.props.user.id) {
      this.props.history.push('/');
    } else {
      this.props.history.push('/userprofile/'+userId);
    }
  }

  render() {
    let userElem = [];
    let rankPageMod = 0;

    if (this._page !== undefined) {
      rankPageMod = this._page.state.selected * 10;
    }
    if (this.props.leaderboard[0] !== undefined) {
      for (let i = 0; i < this.props.leaderboard[0].length; i++) {
        userElem.push(<tr key={i} onClick={this.handleRowClick.bind(this, this.props.leaderboard[0][i].id)} className="leaderTableRow">
          <td className="hidden-xs">
              {(i+1) + rankPageMod}
          </td>
          <td>
            <div className="media">
              <div className="media-left">
              </div>
              <div className="media-body">
                <div className="media-heading">
                  {this.props.leaderboard[0][i].name}
                </div>
              </div>
            </div>
          </td>
          <td>
            {this.props.leaderboard[0][i].level}
          </td>
          <td>
            {this.props.leaderboard[0][i].totalXp}
          </td>
        </tr>);
      }
    }
    return (
      <div>
        <h1>LEADERBOARD</h1>
        <table className="camperlist table table-bordered table-responsive">
          <thead>
            <tr>
              <th className="hidden-xs col-xs-1">RANK #</th>
              <th className="col-xs-5">
                USERNAME
              </th>
              <th className="col-xs-4">
                LEVEL
              </th>
              <th className="col-xs-2">
                TotalXP
              </th>
            </tr>
          </thead>
          <tbody>
            {userElem}
          </tbody>
        </table>
        <Paginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          pageNum={Math.ceil(this.props.leaderboard[1] / 10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick.bind(this)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          ref={(c) => this._page = c}
        />
      </div>
    );
  }

}

export default Leaderboard;
