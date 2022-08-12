import React, { useState, useEffect } from "react";
import Cardlist from "../components/CardList";
import "tachyons";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/swadhinbubaipaul/MyJsonServer/master/db.json"
    )
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
        console.log(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robots.length === 0) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
