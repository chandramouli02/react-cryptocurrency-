import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Cryptocurrency Tracker</h1>
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
