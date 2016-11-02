import React from 'react';
import {
  Layout,
  LayoutTab,
  LayoutTabBar,
  LayoutTabPanel,
  LayoutHeader,
  LayoutHeaderRow,
  LayoutContent,
  Card,
  CardText,
  TextField,
  Navigation,
  NavigationLink
} from './materialDesign';

export default class Dashboard extends React.Component {
  render () {
    return <Layout inheritedClass='dashboardComponent mdl-js-layout mdl-layout--fixed-header'>
      <LayoutHeader>
        <LayoutHeaderRow title='Title'>
          <Navigation>
            <NavigationLink href=''>Link</NavigationLink>
            <NavigationLink href=''>Link</NavigationLink>
            <NavigationLink href=''>Link</NavigationLink>
            <NavigationLink href=''>Link</NavigationLink>
          </Navigation>
        </LayoutHeaderRow>
        <LayoutTabBar inheritedClass='mdl-js-ripple-effect'>
          <LayoutTab href='#scroll-tab-1' inheritedClass='is-active w20'>Tab 1</LayoutTab>
          <LayoutTab href='#scroll-tab-2' inheritedClass='w20'>Tab 2</LayoutTab>
          <LayoutTab href='#scroll-tab-3' inheritedClass='w20'>Tab 3</LayoutTab>
          <LayoutTab href='#scroll-tab-4' inheritedClass='w20'>Tab 4</LayoutTab>
          <LayoutTab href='#scroll-tab-5' inheritedClass='w20'>Tab 5</LayoutTab>
        </LayoutTabBar>
      </LayoutHeader>
      <div className='mdl-layout__drawer'>
        <span className='mdl-layout-title'>Title</span>
        <Navigation>
          <NavigationLink href=''>Link</NavigationLink>
          <NavigationLink href=''>Link</NavigationLink>
          <NavigationLink href=''>Link</NavigationLink>
          <NavigationLink href=''>Link</NavigationLink>
        </Navigation>
      </div>
      <LayoutContent>
        <LayoutTabPanel inheritedClass='is-active' id='scroll-tab-1'>
          <div className='page-content'>
            <div className='w100 inbl spaced'>
              <Card inheritedClass='w100 mdl-shadow--2dp'>
                <CardText inheritedClass='w100'>
                  <TextField inheritedClass='w100' id='login' label='Username' />
                  <TextField inheritedClass='w100' id='password' label='Password' />
                </CardText>
              </Card>
            </div>
            <div className='w50 inbl spaced'>
              <Card inheritedClass='w100 mdl-shadow--2dp'>
                <CardText inheritedClass='w100'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </CardText>
              </Card>
            </div>
            <div className='w50 inbl spaced'>
              <Card inheritedClass='w100 mdl-shadow--2dp'>
                Page 1
              </Card>
            </div>
            <div className='w100 inbl spaced'>
              <Card inheritedClass='w100 mdl-shadow--2dp'>
                Page 1
              </Card>
            </div>
          </div>
        </LayoutTabPanel>
        <LayoutTabPanel id='scroll-tab-2'>
          <div className='page-content'>Page 2</div>
        </LayoutTabPanel>
        <LayoutTabPanel id='scroll-tab-3'>
          <div className='page-content'>Page 3</div>
        </LayoutTabPanel>
      </LayoutContent>
    </Layout>
  }
}
