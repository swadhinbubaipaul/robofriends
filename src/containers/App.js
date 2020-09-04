import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "tachyons";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      robot: [],
    };
  }

  componentWillMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robot: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    if (this.state.robot.length === 0) {
      return <h1 className="tc f1">Loading</h1>;
    } else {
      const filteredroboat = this.state.robot.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
      });
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredroboat} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
