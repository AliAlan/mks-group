import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = ({ data }) => {
  return (
    <div>
      {data &&
        data?.map((item) => (
          <Link key={item.id} to={`/productDetail/${item.id}`}>
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          </Link>
        ))}
    </div>
  );
};

export default Home;
