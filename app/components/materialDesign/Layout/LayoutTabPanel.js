import React, { PropTypes } from 'react';

export default class LayoutTabPanel extends React.Component {
  static propTypes = {
    id:  PropTypes.string,
    inheritedClass:  PropTypes.string
  };

  render () {
    let id = this.props.id || '';
    let componentClass = 'mdl-layout__tab-panel ';
    componentClass += this.props.inheritedClass || '';

    return <section className={ componentClass } id={ id }>
      { this.props.children }
    </section>
  }
}