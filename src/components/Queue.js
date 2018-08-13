import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  text: {
    flexGrow: 1
  },
  content: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class Queue extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.text}
            >
              Queue
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Typography
            variant="body2"
            gutterBottom
            align="center"
            color="rgba(0, 0, 0, 0.54)"
          >
            You have to join a room first before being able to view this page
          </Typography>
        </div>
      </div>
    );
  }
}

Queue.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Queue);
