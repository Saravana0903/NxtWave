import {Component} from 'react'
import GameContext from './Context/GameContext'
import PlayView from './components/PlayView'
import ResultView from './components/ResultView'
import {
  CustomCon,
  Header,
  RPS,
  TextEle,
  ScoreCon,
  ListCon,
} from './StyledComponents'
import './App.css'

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

class App extends Component {
  state = {
    score: 0,
    choice: '',
    opponent: '',
    view: 'Play',
  }

  incrementScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  changeChoice = id => {
    const idx = Math.ceil(Math.random() * 2)
    this.setState({choice: id, view: 'Result', opponent: choicesList[idx].id})
  }

  changeOppChoice = id => {
    this.setState({opponent: id})
  }

  resetScore = () => {
    this.setState({score: 0})
  }

  render() {
    const {score, view, opponent, choice} = this.state
    return (
      <GameContext.Provider
        value={{
          score,
          view,
          opponent,
          incrementScore: this.incrementScore,
          decrementScore: this.decrementScore,
          resetScore: this.resetScore,
          choice,
          changeChoice: this.changeChoice,
          changeOppChoice: this.changeOppChoice,
          changeView: this.changeView,
        }}
      >
        <CustomCon>
          <Header>
            <RPS>
              <TextEle>ROCK</TextEle>
              <TextEle>PAPER</TextEle>
              <TextEle>SCISSORS</TextEle>
            </RPS>
            <ScoreCon>
              <h1>Score</h1>
              <h1>{score}</h1>
            </ScoreCon>
          </Header>
          {view === 'Play' ? (
            <ListCon>
              {' '}
              <PlayView />{' '}
            </ListCon>
          ) : (
            <ResultView />
          )}
        </CustomCon>
      </GameContext.Provider>
    )
  }
}
export default App
