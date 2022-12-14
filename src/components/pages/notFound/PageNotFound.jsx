import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../../images/notfound.png";
import Button from "react-bootstrap/Button";

const PageNotFound = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={NotFound} alt="not found" />
      </div>

      <Link
        style={{
          justifyContent: "center",
          display: "flex",
          textDecoration: "none",
        }}
        to="/"
      >
        <Button contained="outlined-primary">GoBack</Button>
      </Link>
      <br />
    </>
  );
};

export default PageNotFound;
