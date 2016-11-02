import React, { PropTypes } from 'react';
import {
  LayoutHeader,
  LayoutHeaderRow
} from '../materialDesign';

export default class Header extends React.Component {
  static propTypes = {
    title:    PropTypes.any,
    content:  PropTypes.object,
    tabs:     PropTypes.object
  };

  render () {
    return <LayoutHeader>
      <LayoutHeaderRow title={ this.props.title }>
        { this.props.content }
      </LayoutHeaderRow>
      { this.props.tabs }
    </LayoutHeader> 
  }
}