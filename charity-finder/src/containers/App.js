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

  onSearchSubmit = () => {
    // fetch(
    //   "https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=c4f5506d-85e9-4419-978c-d47772dd4c21",
    //   {
    //     method: "get",
    //     headers: {
    //       "Content-type": "application/json",
    //       Accept: "application/json"
    //     },
    //     cache: "no-cache"
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  };

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
