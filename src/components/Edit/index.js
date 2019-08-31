import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  //   constructor(props) {
  // super(props);
  // this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
  // this.onChangePropertyAddress = this.onChangePropertyAddress.bind(this);
  // this.onChangeBusinessEmail = this.onChangeBusinessEmail.bind(this);
  // this.onChangeBusinessPhone = this.onChangeBusinessPhone.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);

  state = {
    business_name: '',
    property_address: '',
    business_email: '',
    business_phone: ''
  };
  //   }

  componentDidMount() {
    axios
      .get('http://localhost:4000/business/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          business_name: response.data.business_name,
          property_address: response.data.property_address,
          business_email: response.data.business_email,
          usiness_phone: response.data.business_phone
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeBusinessName = e => {
    this.setState({
      business_name: e.target.value
    });
  };
  onChangePropertyAddress = e => {
    this.setState({
      property_address: e.target.value
    });
  };
  onChangeBusinessEmail = e => {
    this.setState({
      business_email: e.target.value
    });
  };
  onChangeBusinessPhone = e => {
    this.setState({
      business_phone: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      business_name: this.state.business_name,
      property_address: this.state.property_address,
      business_email: this.state.business_email,
      business_phone: this.state.business_phone
    };
    axios
      .post(
        'http://localhost:4000/business/update/' + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push('/');

    window.location.reload();
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align='center'>Update Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Business Name: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.business_name}
              onChange={this.onChangeBusinessName}
            />
          </div>
          <div className='form-group'>
            <label>Property Address: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.property_address}
              onChange={this.onChangePropertyAddress}
            />
          </div>
          <div className='form-group'>
            <label>Business Email: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.business_email}
              onChange={this.onChangeBusinessEmail}
            />
          </div>
          <div className='form-group'>
            <label>Business Phone: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.business_phone}
              onChange={this.onChangeBusinessPhone}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Update Business'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
