import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'
import Helmet from 'react-helmet'
import ColorPicker from './ColorPicker.react'

if (process.env.IS_BROWSER)
  require('./Board.styl')

export default class Board extends Component {
  render() {
    const {chips, ui: {colorPicker}, actions} = this.props
    const positions = new immutable.List([
      {
        className: 'chip-container-rotated',
        stacks: new immutable.List(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
      },
      {
        className: '',
        stacks: new immutable.List(['center', 'top-right', 'bottom-right', 'bottom-left', 'top-left'])
      }
    ])
    let stackId = 1

    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game'></Helmet>

        <div className='chip-stack-container'>
          {positions.map((chipContainer, containerIndex) =>
            <div
              key={containerIndex}
              className={'chip-container ' + chipContainer.className}
              >
              {chipContainer.stacks.map(position => {
                stackId++
                return (
                  <div
                    key={stackId}
                    className={'chip-stack ' + position}
                    onClick={() => actions.openColorPicker(containerIndex, position, stackId)}
                    ></div>
                )
              })}
            </div>
          )}

          <ColorPicker
            isOpen={colorPicker.open}
            position={colorPicker.position}
            stackId={colorPicker.stackId}
            actions={actions}
            ></ColorPicker>

        </div>
      </div>
    )
  }
}
