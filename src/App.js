// import { render } from "@testing-library/react";
import React, { Component } from "react";
import CharacterInfo from "./CharacterInfo";
import { characters } from "./Characters";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="text-7xl font-black decoration-1 text-green-400">
          Star Wars Friends
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CharacterInfo characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
