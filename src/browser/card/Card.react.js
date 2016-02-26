import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'

export default class Card extends Component {
  render() {
    const {colors, ...other} = this.props

    return (
      <div
        className='card'
        {...other}
        >
        <div className='head'>
          <div className={'chip chip-' + colors.get(0)} />
        </div>

        <div className='lower'>
          <div className={'chip chip-' + colors.get(1)} />
          <div className={'chip chip-' + colors.get(2)} />
          <div className={'chip chip-' + colors.get(3)} />
        </div>
      </div>
    )
  }
}
