import React from 'react';
import Dropzone from 'react-dropzone';
import styles from './DropImage.scss';

export default class DropImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        files: []
      };
    }

    onDrop(acceptedFiles) {
      this.setState({
        files: acceptedFiles
      });
    }

    onOpenClick() {
      this.dropzone.open();
    }

    render() {
      console.log(this.state.files.length);
      return this.state.files.length == 0 ? (
          <Dropzone
            ref={(node) => { this.dropzone = node; }}
            onDrop={this.onDrop.bind(this)}
            multiple={false}
            className={styles.holder}
            activeClassName={styles.holder__active}>
              <div className={styles.icon}></div>
              <div className={styles.text}>Añade una fotografía</div>
          </Dropzone>
        ):(
          <Preview files={this.state.files} />
        );
    }
}

const Preview = ({ files }) => (
  <div className={styles.preview}>
    <div className={styles.preview__holder}>
      {files.map((file) =>
        <img src={file.preview} className={styles.preview__img} />
      )}
    </div>
  </div>
);
