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
      new immutable.List(['yellow', 'red', 'blue', 'green']),
      new immutable.List(['red', 'yellow', 'green', 'blue']),
      new immutable.List(['blue', 'yellow', 'red', 'green']),
    ])

    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game'></Helmet>

        <div className='hand-container'>
          {cards.map((colors, index) =>
            <div
              key={index}
              className='card'
              onClick={() => actions.playCard(colors)}
              >
              <div className='head'>
                <div className={'chip chip-' + colors.get(0)}></div>
              </div>

              <div className='lower'>
                <div className={'chip chip-' + colors.get(1)}></div>
                <div className={'chip chip-' + colors.get(2)}></div>
                <div className={'chip chip-' + colors.get(3)}></div>
              </div>

            </div>
          )}
        </div>

        <div className='core-container'>
          <div className='chip-stack-container'>
            {stack1.map((position, key) => {
              const stackId = parseInt([1, key].join(''))
              return (
                <div
                  key={stackId}
                  id={'stack' + stackId}
                  className={'chip-stack ' + position}
                  onClick={() => actions.openColorPicker(stackId)}
                  >
                    <ChipList chips={chips.getIn(['map', 'stack' + stackId])}></ChipList>
                  </div>
              )
            })}

            <div className='chip-stack-container chip-stack-container-rotated'>
              {stack2.map((position, key) => {
                const stackId = parseInt([2, key].join(''))
                return (
                  <div
                    key={stackId}
                    id={'stack' + stackId}
                    className={'chip-stack ' + position}
                    onClick={() => actions.openColorPicker(stackId)}
                    >
                      <ChipList chips={chips.getIn(['map', 'stack' + stackId])}></ChipList>
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
