import React, { PropTypes } from 'react';
import {
  Navigation,
  NavigationLink,
  LayoutDrawer
} from '../materialDesign';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.any
  };

  render () {
    return <LayoutDrawer title={ this.props.title }>
      { this.props.children }
    </LayoutDrawer>
  }
}
