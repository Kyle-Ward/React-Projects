import React from "react";
import Count from "../components/Count/Count";
import Add from "../components/Add/Add";
import Sub from "../components/Sub/Sub";
import Reset from "../components/Reset/Reset";

const initialState = {
  count: 0
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onSub = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <Count counter={this.state.count} />
        <Add onAdd={this.onAdd} />
        <Sub onSub={this.onSub} />
        <Reset onReset={this.onReset} />
      </div>
    );
  }
}

export default App;
