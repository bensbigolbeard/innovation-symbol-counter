import React, { Component } from 'react';
import './App.css';

const emoji = {
  'Castles': '🏰',
  'Leaves': '🍃',
  'Crowns': '👑',
  'Factories': '🏭',
  'Lightbulbs': '💡',
  'Clocks': '🕚'
};

class App extends Component {
  constructor (props) {
    super(props);
    this.symbols = ['Castles', 'Leaves', 'Crowns', 'Factories', 'Lightbulbs', 'Clocks'];
  }
  render () {
    return (
      <div className='App'>
        { this.symbols.map(symbol => {
          return <Counter symbol={symbol} key={symbol} />;
        })}
      </div>
    );
  }
}

class Counter extends Component {
  constructor (props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      count: 0
    };
  }
  increment () {
    this.setState({ count: this.state.count + 1 });
  }
  decrement () {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render () {
    return (
      <div className='row'>
        <div className='col-counter'>
          <button className='button' onClick={this.decrement}>-</button>
        </div>
        <div className='col-symbol'>
          { emoji[this.props.symbol] } { this.props.symbol }: { this.state.count }
        </div>
        <div className='col-counter'>
          <button className='button' onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
