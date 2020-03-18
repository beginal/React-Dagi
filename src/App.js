import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent'
import EventPractive from './EventPractive'
import Counter from './Counter'
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'
import IterationsSample from './IterationSample'
import Say from './Say'
function App() {
  return (
    <div>
      <EventPractive />
      <MyComponent favoriteNumber={2}>리액</MyComponent>
      <Counter />
      <ValidationSample />
      <Say />
      <IterationsSample />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <ScrollBox ref= {(ref) => this.scrollBox=ref} />
//       <button onClick={() => this.scrollBox.scrollToBottom()}>스크롤 내리기</button>
//     </div>
//     )
//   }
// }

export default App;
