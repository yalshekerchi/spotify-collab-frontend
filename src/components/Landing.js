import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SurroundSound } from '@material-ui/icons';

const styles = theme => ({
  root: {
    flex: '1 0 100%'
  },
  hero: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.5rem',
    textIndent: '.5rem',
    fontWeight: 900,
    [theme.breakpoints.only('xs')]: {
      fontSize: 42
    },
    whiteSpace: 'nowrap'
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: 'center'
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 12
    }
  },
  chip: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: '100%',
    height: '35vw',
    maxHeight: 200
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.hero}>
        <div className={classes.content}>
          <SurroundSound className={classes.logo} />
          <div className={classes.text}>
            <Typography
              variant="display2"
              align="center"
              component="h1"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              {"Sync'd"}
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              gutterBottom
              className={classes.headline}
            >
              {'Simple Collaborative Listening'}
            </Typography>
            <Chip
              className={classes.chip}
              variant="outlined"
              color="primary"
              label="Login with Spotify!"
            />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
