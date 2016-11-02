import React, { PropTypes } from 'react';

export default class Layout extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-layout ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}