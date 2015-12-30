import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'
import Helmet from 'react-helmet'
import ColorPicker from './ColorPicker.react'
import ChipList from './ChipList.react'

if (process.env.IS_BROWSER)
  require('./Board.styl')

export default class Board extends Component {
  render() {
    const {chips, ui: {colorPicker}, actions} = this.props
    const positions = new immutable.List([
      {
        className: 'chip-stack-container-rotated',
        stacks: new immutable.List(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
      },
      {
        className: '',
        stacks: new immutable.List(['center', 'top-right', 'bottom-right', 'bottom-left', 'top-left'])
      }
    ])
console.log(chips.get('list').toObject());
    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game'></Helmet>

        <div className='core-container'>
          {positions.map((chipContainer, containerIndex) =>
            <div
              key={containerIndex}
              className={'chip-stack-container ' + chipContainer.className}
              >
              {chipContainer.stacks.map((position, key) => {
                const stackId = parseInt(containerIndex + '' + key)
                return (
                  <div
                    key={stackId}
                    className={'chip-stack ' + position}
                    onClick={() => actions.openColorPicker(stackId)}
                    >
                      <ChipList chips={chips.get('list').filter(chip => chip.get('stackId') === stackId)}></ChipList>
                    </div>
                )
              })}
            </div>
          )}

          <ColorPicker
            isOpen={colorPicker.open}
            stackId={colorPicker.stackId}
            actions={actions}
            ></ColorPicker>

        </div>
      </div>
    )
  }
}
