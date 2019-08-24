import React, { Component } from 'react';
import { minHeight } from '@material-ui/system';
import { Button, Typography } from '@material-ui/core';

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#1976d2',
          minHeight: '64px',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant='h6' style={{ padding: '12px' }}>
          Office Space as a Service
        </Typography>
        <Button variant='contained' style={{ margin: '12px' }}>
          Lease Your Office Space
        </Button>
      </div>
    );
  }
}
