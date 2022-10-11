import './index.css'

const HistoryItem = props => {
  const {eachItemDetails, clickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails

  const removeItem = () => {
    clickDelete(id)
  }
  return (
    <li className="item-con">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo-icon" alt="logo" />
      <h1 className="head">{title}</h1>
      <p className="domain">{domainUrl}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        className="del-icon"
        alt="delete"
        onClick={removeItem}
      />
    </li>
  )
}
export default HistoryItem
