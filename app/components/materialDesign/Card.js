import React, { PropTypes } from 'react';

export default class Card extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-card ';
    componentClass += this.props.inheritedClass || '';

    console.log(componentClass);

    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}