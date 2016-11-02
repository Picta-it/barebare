import React, { PropTypes } from 'react';

export default class LayoutDrawer extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-layout__drawer ';
    componentClass += this.props.inheritedClass || '';
    
    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}