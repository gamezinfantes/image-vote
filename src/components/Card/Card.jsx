import React from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import styles from './card.scss';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  // userAgent: req.headers['user-agent'],
});


class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comentsHeight: 0,
    }
  }
  onClickComents() {
    const comentsHeight = this.state.comentsHeight > 0 ? 0 : 200;
    this.setState({comentsHeight});
  }

  render(){
    const { comentsHeight } = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png"
            />
          <CardMedia>
            <img src="https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e35/15803419_396413597358611_8354031537582243840_n.jpg?ig_cache_key=MTQyNTYwODc0NzcwMjg3NTE3Nw%3D%3D.2" />
          </CardMedia>
          <CardText>
            <span onClick={this.onClickComents.bind(this)}>Comentarios</span>
            <div className={styles.coments} style={{height: comentsHeight+'px'}} ></div>
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default CardImage;
