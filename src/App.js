import React from "react";
import SearchBox from "./searchBox";
import "./App.css";
import Cardlist from "./card_list";
import Scroll from "./components/scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h2 className="f1">RoboFriends</h2>
        <SearchBox searchRobot={this.onSearchChange} />
        {/* < Cardlist robotData={this.state.robots}/> */}
        <Scroll>
          <Cardlist robotData={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
