import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductDetail, SearchResults } from "./pages";
import { Navbar } from "./components";
function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  async function fetchData() {
    const fetchedData = await fetch("./data.json");
    const data = await fetchedData.json();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route
            path="/searchResults/:searchTerm"
            element={<SearchResults data={data} searchValue={searchValue} />}
          />
          )
          <Route
            path="/productDetail/:id"
            element={<ProductDetail data={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
