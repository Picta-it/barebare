import React from 'react';
import {
  LayoutTab,
  LayoutTabBar
} from './materialDesign';

export default class HeaderTabs extends React.Component {
  static propTypes = {
  };

  render () {
    return <LayoutTabBar inheritedClass='mdl-js-ripple-effect'>
      <LayoutTab href='#scroll-tab-1' inheritedClass='is-active w20'>Tab 1</LayoutTab>
      <LayoutTab href='#scroll-tab-2' inheritedClass='w20'>Tab 2</LayoutTab>
      <LayoutTab href='#scroll-tab-3' inheritedClass='w20'>Tab 3</LayoutTab>
      <LayoutTab href='#scroll-tab-4' inheritedClass='w20'>Tab 4</LayoutTab>
      <LayoutTab href='#scroll-tab-5' inheritedClass='w20'>Tab 5</LayoutTab>
    </LayoutTabBar>;
  }
}
