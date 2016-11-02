import React, { PropTypes } from 'react';
import {
  Navigation,
  NavigationLink,
  LayoutDrawer
} from '../materialDesign';

export default class Header extends React.Component {
  render () {
    console.log(LayoutDrawer);

    return <LayoutDrawer>
      { this.props.children }
    </LayoutDrawer>
  }
}

/**
 * 
      <span className='mdl-layout-title'>Title</span>
      <Navigation>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
      </Navigation>
 */