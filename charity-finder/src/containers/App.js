import React from "react";
import Header from "../components/Header/Header";
import Splash from "../components/Splash/Splash";

const initialState = {
  searchText: "",
  data: []
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
    console.log(this.state.searchText);
  };

  render() {
    return (
      <div>
        <Header />
        <Splash
          onSearchChange={this.onSearchChange}
          onSearchSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }
}
export default App;
