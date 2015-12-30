import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'

if (process.env.IS_BROWSER)
  require('./ColorPicker.styl')

export default class ColorPicker extends Component {
  render() {
    const {isOpen, position, stackId, actions} = this.props
    const colors = ['red', 'green', 'blue', 'yellow']

    return (
      <div
        className={'color-picker picker-' + position}
        // REFACTOR: move this to classes
        style={{
          visibility: isOpen ? 'visible' : 'hidden'
        }}
        >
          {colors.map((color, key) =>
            <div
              key={key}
              className={'chip chip-' + color}
              onClick={() => actions.addChip(stackId, color)}
              ></div>
          )}
      </div>
    )
  }
}
