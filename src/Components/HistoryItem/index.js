import './index.css'

const HistoryItem = props => {
  const {eachItemDetails, clickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails

  const removeItem = () => {
    clickDelete(id)
  }
  return (
    <li className="item-con">
      <div className="item-in-list">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="item-in-list">
        <img src={logoUrl} className="logo-icon" alt="domain logo" />
      </div>
      <div className="item-in-list">
        <p className="head">{title}</p>
      </div>
      <div className="item-in-list">
        <p className="domain">{domainUrl}</p>
      </div>
      <button className="item-in-list" onClick={removeItem} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="del-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
