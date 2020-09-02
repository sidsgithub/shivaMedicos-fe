import { SearchBar } from "react-native-elements";
import React, { useState } from "react";

function Search() {
  
  const [search, setSearch] = useState("");

  return (
    <SearchBar
      lightTheme={true}
      round={true}
      color="black"
      clearIcon={null}
      placeholder="Search"
      onChangeText={setSearch}
      value={search}
    />
  );
}

export default Search;
