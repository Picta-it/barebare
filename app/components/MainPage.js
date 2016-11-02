import React, { PropTypes } from 'react';
import PageSkeleton from './PageSkeleton';
import HeaderContent from './HeaderContent';
import HeaderTabs from './HeaderTabs';
import DrawerContent from './DrawerContent';

export default class MainPage extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render () {
    return <PageSkeleton
      headerTitle='Title'
      headerContent={<HeaderContent />}
      headerTabs={<HeaderTabs />}
      drawerTitle='Title'
      drawerContent={<DrawerContent />}
    >
      { this.props.children }
    </PageSkeleton>;
  }
}
