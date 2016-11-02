import React, { PropTypes } from 'react';

export default class LayoutContent extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    href:            PropTypes.string
  };

  render () {
    let href = this.props.href || href;
    let componentClass = 'mdl-layout__content ';
    componentClass += this.props.inheritedClass || '';

    return <main className={ componentClass }>
      { this.props.children }
    </main>
  }
}