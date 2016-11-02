import React, { PropTypes } from 'react';

export default class LayoutHeader extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-layout__header ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}