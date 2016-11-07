import React from 'react';
import {
  LayoutContent
} from '../materialDesign';

export default class Header extends React.Component {
  render () {
    return <LayoutContent>
      { this.props.children }
    </LayoutContent>;
  }
}
