import GameContext from '../../Context/GameContext'
import {ListItem, BtnItem, Item} from './styledcomponents'

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

const PlayView = () => (
  <GameContext.Consumer>
    {value => {
      const {
        score,
        incrementScore,
        decrementScore,
        changeChoice,
        changeOppChoice,
      } = value
      const selectChoice = e => {
        console.log('clicked')
        changeChoice(e.target.id)
      }
      return (
        <ListItem>
          {choicesList.map(eachItem => (
            <BtnItem id={eachItem.id} type="button" onClick={selectChoice}>
              <Item src={eachItem.imageUrl} />
            </BtnItem>
          ))}
        </ListItem>
      )
    }}
  </GameContext.Consumer>
)

export default PlayView
