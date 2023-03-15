import React from "react";
import { Card } from "../components";
import { Link } from "react-router-dom";
const SearchResults = ({ data, searchValue }) => {
  const searchResult = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <section className="container mx-auto">
      {searchResult &&
        searchResult?.map((item) => (
          <Link key={item.id} to={`/productDetail/${item.id}`}>
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          </Link>
        ))}
    </section>
  );
};

export default SearchResults;
