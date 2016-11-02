import React, { PropTypes } from 'react';

export default class LayoutDrawer extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string,
    title:           PropTypes.any
  };

  render () {
    let title;
    let componentClass = 'mdl-layout__drawer ';
    componentClass += this.props.inheritedClass || '';

    if( this.props.title ) {
      title = <span className='mdl-layout-title'>{ this.props.title }</span>
    }

    return <div className={ componentClass }>
      { title }
      { this.props.children }
    </div>
  }
}
