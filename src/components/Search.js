import React, {useState} from "react";

function Search({setSearch}) {

const [finalSearch, setFinalSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(finalSearch)

  }

  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={finalSearch}
        onChange={(e) => setFinalSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
