import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';

export default class Footer extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  }

  render() {
    const {msg} = this.props;

    return (
      <footer style={{textAlign: 'right'}}>
        <p>
          Made by <a href="http://www.betterhen.cz" target="_blank">betterhen.cz</a>
        </p>
      </footer>
    );
  }

}
