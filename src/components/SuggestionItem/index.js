import './index.css'

const SuggestionItem = props => {
  const {eachHistory} = props
  const {
    id,
    title,
    timeAccessed,
    logoUrl,
    domainUrl,
    deleteHistoryItem,
  } = eachHistory

  const onClickDeleteButton = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="each-history-list-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-url-container">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="domain-title">{title}</p>
        <p className="domain-url-text">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onClickDeleteButton}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
