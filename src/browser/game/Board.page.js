import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'
import Helmet from 'react-helmet'

if (process.env.IS_BROWSER)
  require('./Board.styl')

export default class Board extends Component {
  render() {
    const {chips} = this.props

    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game' />
        <div className='container-container'>
          <div className='chip-container chip-container-rotated'>
            <div className='chip-stack top-left'>1</div>
            <div className='chip-stack top-right'>3</div>
            <div className='chip-stack bottom-right'>5</div>
            <div className='chip-stack bottom-left'>7</div>
          </div>
          <div className='chip-container'>
            <div className='chip-stack top-right'>2</div>
            <div className='chip-stack bottom-right'>4</div>
            <div className='chip-stack bottom-left'>6</div>
            <div className='chip-stack top-left'>8</div>
          </div>
        </div>
      </div>
    )
  }
}
