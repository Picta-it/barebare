import React, { PropTypes } from 'react';
import {
  LayoutTabPanel,
  Card,
  CardText,
  TextField
} from './materialDesign';

export default class Dashboard extends React.Component {
  static propTypes = {
  };

  render () {
    return <div>
      <span className='mdl-layout-title'>Title</span>
      <Navigation>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
        <NavigationLink href=''>Link</NavigationLink>
      </Navigation>
    </div>
  }
}