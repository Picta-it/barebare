import React, { PropTypes } from 'react';

export default class Navigation extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-navigation ';
    let href = this.props.href || '';
    componentClass += this.props.inheritedClass || '';

    return <nav className={ componentClass }>
      { this.props.children }
    </nav>
  }
}