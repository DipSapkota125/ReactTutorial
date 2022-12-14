import React from "react";
import Card from "react-bootstrap/Card";
// import CustomerServe from "../../../images/customerserve.png";

const DealProduct = ({ DealProduct }) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <Card>
          <Card.Img variant="top" src={DealProduct.url} />
          <Card.Body>
            <Card.Title>{DealProduct.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default DealProduct;
