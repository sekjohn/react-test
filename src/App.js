import React from 'react';
import { Button } from 'antd';
import './App.css';

const actions = {
  init(initialValue) {  
    return {value : initialValue}
  },
  increment(prevState) {
    return {value : prevState.value + 1 };
  },
  decrement(prevState){
    return {value : prevState.value - 1 };
  }

}


class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue)
  render() {
    const { value }= this.state;
    return (
      <div>
        Counter1:{value}
        <Button onClick={() => this.setState(actions.increment)}>증가</Button>
        <Button onClick={() => this.setState(actions.decrement)}>감소</Button>
      </div>
    )
  }
}


function App() {
  return (
    <div >
      <Counter1 initialValue ={0} />
    </div>
  );
}

export default App;
