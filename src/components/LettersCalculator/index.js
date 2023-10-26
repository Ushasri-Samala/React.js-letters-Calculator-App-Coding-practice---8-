// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {value: 0}

  onClicking = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  render() {
    const {value} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="header">Calculate the Letters you enter</h1>
          <form>
            <label htmlFor="name" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="name"
              onKeyDown={this.onClicking}
            />
          </form>

          <p className="solution"> No.of letters: {value} </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
