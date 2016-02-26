import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Login from '../auth/Login.react'

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        <Login {...this.props} />
      </div>
    );
  }

}
