import useState from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const HistoryList = props => {
  const {initialHistoryList} = props
  const [updatedList, setUpdatedList] = useState(initialHistoryList)
  const filteredList = [...updatedList]

  const updateOnClick = id => {
    const newList = updatedList.filter(each => each.id !== id)
    setUpdatedList(newList)
  }

  const controlList = event => {
    const lyst = updatedList.filter(each =>
      each.toLowerCase(each.title).includes(event.target.value),
    )
    setUpdatedList(lyst)
  }

  return (
    <>
      <div className="bg-container">
        <div className="flex-con">
          <div className="logo-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="logo"
              alt="app logo"
            />
          </div>
          <div className="search-con">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search"
                alt="search"
              />
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="type to search"
                className="inpele"
                onChange={controlList}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="list-con">
        {updatedList.length > 0 ? (
          <ul className="ul-con">
            {filteredList.map(eachItem => (
              <HistoryItem
                eachItemDetails={eachItem}
                clickDelete={updateOnClick}
              />
            ))}
          </ul>
        ) : (
          <p className="no-item"> No Items to Show </p>
        )}
      </div>
    </>
  )
}
export default HistoryList
