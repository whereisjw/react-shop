import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Card = (props) => {
  let [src, setSrc] = useState([]);
  return (
    <>
      <Col>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
          width="80%"
          alt=""
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
};

export default Card;
