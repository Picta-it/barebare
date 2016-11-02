import React, { PropTypes } from 'react';

export default class TextField extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    id:              PropTypes.string.isRequired,
    label:           PropTypes.string,
    type:            PropTypes.string
  };

  render () {
    let type = this.props.type ? this.props : 'text';

    let componentClass = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      <input className="mdl-textfield__input" type={ type } id={ this.props.id } />
      <label className="mdl-textfield__label" htmlFor={ this.props.id }>{ this.props.label }</label>
    </div>
  }
}