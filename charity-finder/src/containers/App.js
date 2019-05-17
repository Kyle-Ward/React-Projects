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

  componentDidMount() {
    fetch(
      "https://api.globalgiving.org/api/public/orgservice/all/organizations?api_key=c4f5506d-85e9-4419-978c-d47772dd4c21",
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(info => this.setState({ data: info }))
      .catch(error => console.log(error));
  }

  onSearchSubmit = () => {
    console.log(this.state.data);
  }

  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
    console.log(this.state.searchText);
  };

  render() {
    return (
      <div>
        <h1>WORK IN PROGRESS</h1>
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
