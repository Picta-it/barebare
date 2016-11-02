import React, { PropTypes } from 'react';

export default class CardTitle extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    title:  PropTypes.string
  };

  render () {
    let title = undefined;
    let componentClass = 'mdl-card__title ';
    componentClass += this.props.inheritedClass || '';

    if (this.props.title) {
      title = <h2 className='mdl-card__title-text'>{ this.props.title }</h2>
    }

    return <div className={ componentClass }>
      { title }
      { this.props.children }
    </div>
  }
}