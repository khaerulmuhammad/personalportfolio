// import React, { useState } from "react";
import React from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
// import Search from "./Search";
import { useHistory } from "react-router";

function Banner() {
  const history = useHistory();
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      {/* <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {" "}
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div> */}
      <div className="banner__info">
        <h3>Hi, my name is </h3>
        <h1>Muhammad </h1>
        <h1>Khaerul Umam. </h1>

        <h2>I build things for the web & graphic desain</h2>
        <h5>
          I'm a software engineer based in Boston, MA specializing in building
          (and occasionally designing) exceptional websites.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default Banner;
