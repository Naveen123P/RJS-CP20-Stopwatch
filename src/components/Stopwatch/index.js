// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {}

  render() {
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p>Timer</p>
            </div>
            <h1>00:00</h1>
            <div className="button-container">
              <button type="button" className="start-button">
                Start
              </button>
              <button type="button" className="stop-button">
                Stop
              </button>
              <button type="button" className="reset-button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
