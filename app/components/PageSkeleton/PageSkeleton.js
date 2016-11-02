import React, { PropTypes } from 'react';
import {
  Layout
} from '../materialDesign';
import Header from './Header';
import Drawer from './Drawer';
import Content from './Content';

export default class Dashboard extends React.Component {
  static propTypes = {
    headerTitle:    PropTypes.object,
    headerContent:  PropTypes.object,
    headerTabs:     PropTypes.object,
    drawerContent:  PropTypes.object,
    drawerTitle:    PropTypes.object
  };

  render () {
    return <Layout inheritedClass='dashboardComponent mdl-js-layout mdl-layout--fixed-header'>
      <Header
        title={ this.props.headerTitle }
        content={ this.props.headerContent }
        tabs={ this.props.headerTabs }
      />
      <Drawer
        title={ this.props.drawerTitle }
      >
        { this.props.drawerContent }
      </Drawer>
      <Content>
        { this.props.children }
      </Content>
    </Layout>
  }
}
