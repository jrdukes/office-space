import React, { Component } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default class Create extends Component {
  // constructor(props) {
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
  // }
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
      .post('http://localhost:4000/business/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      business_name: '',
      property_address: '',
      business_email: '',
      business_phone: ''
    });

    this.props.history.push('/');
    window.location.reload();
  };

  // class PhoneInput extends Component {
  //   render() {
  //     return <InputMask {...this.props} mask="+4\9 99 999 99" maskChar=" " />;
  //   }
  // }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align='center'>Add Office Space To Lease</h3>
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
            {/* <input
              type='text'
              className='form-control'
              value={this.state.business_phone}
              onChange={this.onChangeBusinessPhone}
            /> */}
            <PhoneInput
              placeholder='Enter phone number'
              value={this.state.phone}
              onChange={phone => this.setState({ phone })}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Submit' className='btn btn-primary' />
          </div>
        </form>
      </div>
    );
  }
}
