import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

const {initialHistoryList} = this.props
class HistorySuggestions extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noHistoryCard = () => (
    <div className="no-history-card">
      <p>There is no history to show</p>
    </div>
  )

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const newList = historyList.filter(eachHistory => eachHistory.id !== id)
    this.setState({historyList: [...newList]})
  }

  historyItems = searchedHistoryList => (
    <ul className="history-items-container">
      {searchedHistoryList.map(eachHistory => (
        <SuggestionItem key={eachHistory.id} eachHistory={eachHistory} />
      ))}
    </ul>
  )

  render() {
    const {searchInput, historyList} = this.state

    const searchedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const searchResult =
      searchedHistoryList.length === 0
        ? this.noHistoryCard
        : this.historyItems(searchedHistoryList)

    return (
      <div className="bg-container">
        <div className="search-input-container">
          <div className="history-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png a"
              alt="history logo"
              className="history-logo"
            />
          </div>
          <div className="input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search icon"
                className="search-icon"
              />
            </div>
            <input
              className="search-input"
              value={searchInput}
              placeholder="search history"
              type="search"
              onChange={this.changeInput}
            />
          </div>
        </div>
        {searchResult}
      </div>
    )
  }
}
export default HistorySuggestions
