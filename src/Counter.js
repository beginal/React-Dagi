import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  }
  render() {
    const { number } = this.state;
    return (
      <div>
      <h1>{number}</h1>
      <button
      onClick={() => {
        this.setState(
          {
            number: number + 1         
          },
        () => {
          console.log('스테이트를 호출해?')
          console.log(this.state)
        }
        );
      }}
      >+1
      </button>
      </div>
    )
  }

}

export default Counter;