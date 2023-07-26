import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrenciesLIst()
  }

  getCryptoCurrenciesLIst = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrenciesList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul>
              <div className="table">
                <p>Coin Type</p>
                <div>
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </div>
              {cryptoCurrenciesList.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} item={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
