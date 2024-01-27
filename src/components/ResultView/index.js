import GameContext from '../../Context/GameContext'
import {ResultCon, ItemCon, ListItem, Item, Result} from './styledcomponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const ResultView = () => (
  <GameContext.Consumer>
    {value => {
      const {
        ourChoice,
        choice,
        changeChoice,
        changeOppChoice,
        changeView,
        incrementScore,
        decrementScore,
        resetScore,
      } = value
      const idx1 = choicesList.findIndex(eachItem => eachItem.id === choice)
      const idx2 = choicesList.findIndex(eachItem => eachItem.id === ourChoice)
      console.log(idx1, idx2)
      const onPlayAgain = () => {
        changeChoice('')
        changeOppChoice('')
        changeView('Play')
        resetScore(0)
      }

      const calResult = () => {
        let res
        if (idx1 === idx2) {
          res = "IT'S A DRAW"
        } else if (idx1 < idx2) {
          incrementScore()
          res = 'YOU WON'
        } else {
          decrementScore()
          res = 'YOU LOST'
        }
        return res
      }

      return (
        <ResultCon>
          <ItemCon>
            <ListItem>
              <h1>YOU</h1>
              <Item src={choicesList[0].imageUrl} />
            </ListItem>
            <ListItem>
              <h1>OPPONENT</h1>
              <Item src={choicesList[0].imageUrl} />
            </ListItem>
          </ItemCon>
          <Result>
            <p>{calResult()}</p>
            <button onClick={onPlayAgain}>Play Again</button>
          </Result>
        </ResultCon>
      )
    }}
  </GameContext.Consumer>
)
export default ResultView
