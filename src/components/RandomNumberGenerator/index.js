// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomIncrement = Math.floor(Math.random() * 100)
    this.setState({
      count: randomIncrement,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="bg-1">
          <div>
            <h1 className="h1">Random Number</h1>
            <p className="p1">
              Generate a random number in the range of 0 to 100
            </p>
            <button type="button" className="btn-1" onClick={this.onIncrement}>
              Generate
            </button>
            <p className="p2">{count <= 100 ? count : null}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
