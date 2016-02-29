import Component from 'react-pure-render/component'
import Helmet from 'react-helmet'
import React, {PropTypes} from 'react'
import Login from '../auth/Login.react'

export default class Page extends Component {

  static propTypes = {
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
