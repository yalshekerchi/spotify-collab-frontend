import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import _ from 'lodash';
import {
  withStyles,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import { Home, PlayArrow, QueueMusic } from '@material-ui/icons';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0%'
  }
};

const menuItems = [
  { label: 'Rooms', route: '/rooms', icon: <Home /> },
  { label: 'Now Playing', route: '/playing', icon: <PlayArrow /> },
  { label: 'Queue', route: '/queue', icon: <QueueMusic /> }
];

class NavigationBar extends React.Component {
  renderBottomNavigationActions() {
    return menuItems.map(item => (
      <BottomNavigationAction
        key={item.route}
        label={item.label}
        icon={item.icon}
        component={Link}
        to={item.route}
      />
    ));
  }

  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    const itemIndex = _.findIndex(menuItems, ['route', pathname]);
    if (itemIndex < 0) {
      return null;
    }

    return (
      <BottomNavigation value={itemIndex} showLabels className={classes.root}>
        {this.renderBottomNavigationActions()}
      </BottomNavigation>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(NavigationBar);
