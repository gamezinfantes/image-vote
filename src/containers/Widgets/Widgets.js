import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as widgetActions from 'redux/modules/widgets';
import {isLoaded, load as loadWidgets} from 'redux/modules/widgets';
import {initializeWithKey} from 'redux-form';
import { ImageSmall } from 'components';
import { asyncConnect } from 'redux-async-connect';
import styles from './Widgets.scss';

@connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  {...widgetActions, initializeWithKey })
export default class Widgets extends Component {
    render() {
      return (
        <div className={styles.imagecontainer}>
          <ImageSmall />
          <ImageSmall />
          <ImageSmall />
          <ImageSmall />
          <ImageSmall />
          <ImageSmall />
        </div>
      )
    }
}

