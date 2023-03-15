import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchValue }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setSearchValue(value);
    navigate(`/searchResults/${value}`);
    setValue("");
  }
  return (
    <nav className="flex items-center nav bg-yellow-100">
      <div className="container flex items-center justify-between mx-auto h-full">
        <div className="logo">
          <Link to="/">MKS Group</Link>
        </div>
        <div className="links"></div>
        <div className="search-cont">
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="search"
              id="search"
              placeholder="Ürün arayın"
              value={value}
              className="px-5 py-3 rounded-3xl"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
