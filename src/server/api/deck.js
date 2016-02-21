import express from 'express'
import shortid from 'shortid'
import immutable from 'immutable'
import permutations from '../lib/permutations'
import Shuffle from 'shuffle'

const router = express.Router();

router.route('/create')
  .get((req, res) => {
    // TODO: run this only on game start
    // 
    const colors = new immutable.List(['red', 'green', 'blue', 'yellow'])

    const cards = colors.reduce((result, headColor) => {
      const withoutHeadColor = colors.filter((color) => color !== headColor).toArray()
      const flatPerms = permutations(withoutHeadColor)
      flatPerms.forEach(colorSets => {
        colorSets.unshift(headColor)
        // push twice, every card should be in deck twice
        result.push(colorSets)
        result.push(colorSets)
      })
      return result
    }, [])

    const deck = Shuffle.shuffle({deck: cards})

    res.status(200).send({
      deck
    }).end();
  });

export default router;
