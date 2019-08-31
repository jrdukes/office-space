import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get('http://localhost:4000/business/delete/' + this.props.obj._id)
      // .delete('http://localhost:4000/business/delete/', this.state)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));

    // this.props.history.push('/');
    // window.location.reload();
    console.log(this.props.history);
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.business_name}</td>
        <td>{this.props.obj.property_address}</td>
        <td>{this.props.obj.business_email}</td>
        <td>{this.props.obj.business_phone}</td>
        <td>
          <Link to={'/edit/' + this.props.obj._id} className='btn btn-primary'>
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className='btn btn-danger'>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
