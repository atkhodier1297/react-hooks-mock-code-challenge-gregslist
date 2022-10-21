import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])
const [search, setSearch]= useState('')

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(r => r.json())
  .then(data => setListings(data))
}, [])

console.log(listings)

function removeListing(id){
  const newListing = listings.filter((listing) => listing.id !== id)
  setListings(newListing)
}

const filteredListings = listings.filter((listing) => 
listing.description.toLowerCase().includes(search.toLowerCase())
)

console.log(search)

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={filteredListings} removeListing={removeListing} />
    </div>
  );
}

export default App;
