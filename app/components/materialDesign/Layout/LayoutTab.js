import React, { PropTypes } from 'react';

export default class LayoutTab extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    href:            PropTypes.string
  };

  render () {
    let href = this.props.href || href;
    let componentClass = 'mdl-layout__tab ';
    componentClass += this.props.inheritedClass || '';

    return <a href={ href } className={ componentClass }>
      { this.props.children }
    </a>
  }
}