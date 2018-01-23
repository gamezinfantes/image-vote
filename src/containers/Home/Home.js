import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Card, DropImage } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div style={{padding: "0.5em 0"}}><Card /></div>
        <div style={{padding: "0.5em 0"}}><Card /></div>
        <div style={{padding: "0.5em 0"}}><Card /></div>
        <div style={{padding: "0.5em 0"}}><Card /></div>
      </div>
    );
  }
}
