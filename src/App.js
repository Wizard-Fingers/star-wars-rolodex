// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CharacterInfo from "./CharacterInfo";
// import { characters } from "./Characters";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      // characters: characters,
      searchfield: "",
    };
    // console.log('constructor')
  }

  componentDidMount() {
    // this.setState({ characters: characters })
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ characters: users });
      });
    // console.log('render did mount')
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log(event.target.value);
  };
  render() {
    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.characters.length === 0) {
      return (
        <h1 className="text-7xl font-black decoration-1 text-green-400">
          Loading...
        </h1>
      );
    } else {
      return (
    // console.log('render ')
      <div className="tc">
        <h1 className="text-7xl font-black decoration-1 text-green-400">
          Friends
        </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CharacterInfo characters={filteredCharacters} />
            </Scroll>
      </div>
    );
    }
  }
}
export default App;
