import React, { PropTypes } from 'react';
import Card from './materialDesign/Card';
import CardTitle from './materialDesign/CardTitle';
import CardActions from './materialDesign/CardActions';
import CardText from './materialDesign/CardText';
import TextField from './materialDesign/TextField';
import Button from './materialDesign/Button';

export default class Login extends React.Component {
  static propTypes = {
    inheritedClass:  PropTypes.string
  };

  render () {
    let componentClass = 'loginComponent mauto tiny-w100 small-w50 ';
    componentClass += this.props.inheritedClass || '';

    return <Card inheritedClass={ componentClass }>
      <CardTitle title='Connection' inheritedClass='w100 mdl-color--primary mdl-color-text--white'/>
      <CardText inheritedClass='w100'>
        <TextField id='login' label='Username' />
        <TextField id='password' label='Password' />
      </CardText>
      <CardActions inheritedClass='w100 txtright'>
        <Button
          inheritedClass='mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--raised'
        >
          Login
        </Button>
      </CardActions>
    </Card>
  }
}