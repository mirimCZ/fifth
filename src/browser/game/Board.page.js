import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'
import Helmet from 'react-helmet'
import ColorPicker from './ColorPicker.react'
import ChipList from './ChipList.react'

if (process.env.IS_BROWSER) {
  require('./Board.styl')
  require('./Hand.styl')
}

export default class Board extends Component {
  render() {
    const {chips, ui: {colorPicker}, actions} = this.props
    const stack1 = new immutable.List(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
    const stack2 = new immutable.List(['center', 'top-right', 'bottom-right', 'bottom-left', 'top-left'])
    const cards = new immutable.List([
      ['yellow', 'red', 'blue', 'green'],
      ['red', 'yellow', 'green', 'blue'],
      ['blue', 'yellow', 'red', 'green'],
    ])

    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game'></Helmet>

        <div className='hand-container'>
          {cards.map(colors =>
            <div className='card'>
              {colors.map(color =>
                <div className={'chip chip-' + color}></div>
              )}
            </div>
          )}
        </div>

        <div className='core-container'>
          <div className='chip-stack-container'>
            {stack1.map((position, key) => {
              const stackId = parseInt([0, key].join(''))
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


            <div className='chip-stack-container chip-stack-container-rotated'>
              {stack2.map((position, key) => {
                const stackId = parseInt([1, key].join(''))
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
          </div>

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
