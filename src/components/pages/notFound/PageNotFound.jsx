import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="notFound">
        <h1>OOps Page Not Found!</h1>
        <Link to="/">
          <button>GoBack</button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
