import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'

if (process.env.IS_BROWSER)
  require('./ChipList.styl')

export default class ChipList extends Component {
  render() {
    const {chips} = this.props

    return (
      <div className='chip-list'>
        {chips.map((chip, index) =>
          <div
            key={index}
            className={'chip chip-' + chip.get('color')}
            style={{
              left: index * 2,
              top: index * -8
            }}
            ></div>
        )}
      </div>
    )
  }
}
