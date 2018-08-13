import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    width: '100%'
  }
};

class Queue extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>Queue</div>;
  }
}

Queue.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Queue);
