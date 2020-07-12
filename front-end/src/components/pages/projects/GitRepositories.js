import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardTemplate from './CardTemplate';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

class Repositories extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = () => {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.props.onLoadMore();
    }
  };

  render() {
    if (!this.props.entries && this.props.loading)
      return <CircularProgress color="inherit" />;
    const repo = this.props.entries.repositories.nodes || [];
    return (
      <React.Fragment>
        {repo.map((node, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} align="center">
            <CardTemplate
              key={index}
              image={node.openGraphImageUrl}
              name={node.name}
              createDate={node.createdAt}
              description={node.description}
              url={node.url}
            />
          </Grid>
        ))}
        <Grid item xs={12} align="center">
          {this.props.loading && <Typography>LOADING...</Typography>}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Repositories;
