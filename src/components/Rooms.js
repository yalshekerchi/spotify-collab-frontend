import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import { Add, Cached } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1
  },
  text: {
    flexGrow: 1
  },
  lastIcon: {
    marginRight: -16
  },
  content: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class Rooms extends React.Component {
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
              Rooms
            </Typography>
            <IconButton color="inherit">
              <Cached />
            </IconButton>
            <IconButton className={classes.lastIcon} color="inherit">
              <Add />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Typography
            variant="body2"
            gutterBottom
            align="center"
            color="rgba(0, 0, 0, 0.54)"
          >
            No rooms exist at the moment, please consider making one
          </Typography>
        </div>
      </div>
    );
  }
}

Rooms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Rooms);
