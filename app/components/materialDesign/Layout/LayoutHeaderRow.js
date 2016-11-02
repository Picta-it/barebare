import React, { PropTypes } from 'react';

export default class LayoutHeaderRow extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    title:           PropTypes.any
  };

  render () {
    let title = this.props.title || '';
    let componentClass = 'mdl-layout__header-row ';
    componentClass += this.props.inheritedClass || '';

    return <div className={ componentClass }>
      <span className='mdl-layout-title'>{ title }</span>
      <div className='mdl-layout-spacer'></div>
      { this.props.children }
    </div>
  }
}