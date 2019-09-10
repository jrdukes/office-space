import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Home extends Component {
  state = { business: [] };

  componentDidMount() {
    axios
      .get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow = history => {
    return this.state.business.map(function(object, i) {
      return <TableRow obj={object} key={i} history={history} />;
    });
  };

  render() {
    return (
      <div>
        <h3 align='center'>Property List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Business</th>
              <th>Property Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow(this.props.history)}</tbody>
        </table>
      </div>
    );
  }
}
