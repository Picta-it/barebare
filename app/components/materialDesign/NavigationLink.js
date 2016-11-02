import React, { PropTypes } from 'react';

export default class NavigationLink extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    href:     PropTypes.string
  };

  render () {
    let componentClass = 'mdl-navigation__link ';
    let href = this.props.href || '';
    componentClass += this.props.inheritedClass || '';

    return <a className={ componentClass } href={ href }>
      { this.props.children }
    </a>
  }
}