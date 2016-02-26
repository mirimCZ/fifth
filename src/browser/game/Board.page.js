import Component from 'react-pure-render/component'
import React, {PropTypes} from 'react'
import immutable from 'immutable'
import Helmet from 'react-helmet'
import ColorPicker from './ColorPicker.react'
import ChipList from './ChipList.react'
import Card from '../card/Card.react'

if (process.env.IS_BROWSER) {
  require('./Board.styl')
  require('./CardContainer.styl')
}

export default class Board extends Component {
  render() {
    const {chips, ui: {colorPicker}, actions} = this.props
    const stack1 = new immutable.List(['top-left', 'top-right', 'bottom-left', 'bottom-right'])
    const stack2 = new immutable.List(['center', 'top-right', 'bottom-right', 'bottom-left', 'top-left'])
    const cards = chips.get('cardsInHand')
    const lastPlayedCard = chips.get('playCards').last()

    return (
      <div className='board'>
        <Helmet title='Fifth Element Board Game' />

        <div className='card-container card-container-stacked'>
          <Card colors={lastPlayedCard} />
        </div>

        <div className='card-container'>
          {cards.map((colors, index) =>
            <Card
              key={index}
              colors={colors}
              onClick={() => actions.playCard(colors)}
              />
          )}
        </div>

        <div className='board-flex'>
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
                      <ChipList chips={chips.getIn(['map', 'stack' + stackId])} />
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
                        <ChipList chips={chips.getIn(['map', 'stack' + stackId])} />
                      </div>
                  )
                })}
              </div>
            </div>

            <ColorPicker
              isOpen={colorPicker.open}
              stackId={colorPicker.stackId}
              actions={actions}
              />

          </div>
        </div>
      </div>
    )
  }
}
