import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    width: '100%'
  }
};

class Rooms extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Rooms</div>;
  }
}

Rooms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Rooms);
