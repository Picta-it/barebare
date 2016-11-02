import React, { PropTypes } from 'react';
import {
  Layout
} from '../materialDesign';
import Header from './Header';
import Drawer from './Drawer';
import Content from './Content';

export default class PageSkeleton extends React.Component {
  static propTypes = {
    children     : PropTypes.object,
    headerTitle  : PropTypes.any,
    headerContent: PropTypes.object,
    headerTabs   : PropTypes.object,
    drawerTitle  : PropTypes.any,
    drawerContent: PropTypes.object
  };

  render () {
    return <Layout inheritedClass='dashboardComponent mdl-js-layout mdl-layout--fixed-header'>
      <Header
        title={this.props.headerTitle}
        content={this.props.headerContent}
        tabs={this.props.headerTabs}
      />
      <Drawer
        title={this.props.drawerTitle}
      >
        { this.props.drawerContent }
      </Drawer>
      <Content>
        { this.props.children }
      </Content>
    </Layout>;
  }
}
