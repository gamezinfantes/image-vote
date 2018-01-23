import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { Card, DropImage } from 'components';
import styles from './PhotoUpload.scss';


export default class PhotoUpload extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Subir imagen" />
        <div className={styles.photoUpload}>
          <div className={styles.photoUpload__image}>
            <DropImage />
          </div>
          <div className={styles.photoUpload__coment}>
            <textarea
              className={styles.comment}
              placeholder="Escribe un comentario para la fotografia....">
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}

