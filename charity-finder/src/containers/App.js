import React from "react";
import Header from "../components/Header/Header";
import Splash from "../components/Splash/Splash";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
      </div>
    );
  }
}

export default App;
