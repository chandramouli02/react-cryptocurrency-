import './index.css'
import {Component} from 'react'

class CryptocurrencyItem extends Component {
  render() {
    const {item} = this.props
    const {currencyName, usdValue, euroValue, currencyLogo} = item
    return (
      <li className="cryptoItem">
        <div className="coin-type">
          <img src={currencyLogo} alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="values">
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
