import React, { PropTypes } from 'react';
import {
  LayoutTabPanel,
  Card,
  CardText,
  TextField
} from './materialDesign';

export default class Dashboard extends React.Component {
  static propTypes = {
  };

  render () {
    return <div>
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
    </div>
  }
}