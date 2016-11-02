import React, { PropTypes } from 'react';

export default class CardActions extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'mdl-card__actions ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      { this.props.children }
    </div>
  }
}