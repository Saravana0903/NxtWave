import React from 'react'

const GameContext = React.createContext({
  score: 0,
  view: '',
  choice: '',
  opponent: '',
  changeChoice: () => {},
  changeOppChoice: () => {},
  resetScore: () => {},
  incrementScore: () => {},
  decrementScore: () => {},
})

export default GameContext
