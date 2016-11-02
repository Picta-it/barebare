import React, { PropTypes } from 'react';

export default class Button extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-button ';
    componentClass += this.props.inheritedClass || '';

    return <a className={ componentClass }>
      { this.props.children }
    </a>
  }
}