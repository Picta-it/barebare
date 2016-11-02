import React, { PropTypes } from 'react';

export default class CardText extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-card__supporting-text ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}