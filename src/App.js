import { Col, Container, Nav, Navbar, Row, Table } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png";
import { createContext, useEffect, useState } from "react";
import data from "./data";
import Card from "./Card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Detail from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [loding, setLoding] = useState(true);
  let [재고] = useState([10, 11, 12]);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">서울쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}>
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail");
              }}>
              특징
            </Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {loding ? <strong>Loading...</strong> : null}
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                style={{ backgroundImage: "url(" + bg + ")" }}
                className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((v, i) => (
                    <Card shoes={shoes[i]} i={i + 1} />
                  ))}
                </Row>
              </Container>

              <button
                onClick={() => {
                  /* 로딩중ui듸우기 */

                  setLoding(true);

                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      console.log(result.data);
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                      setLoding(false);
                      /* 로딩중숨기기 */
                    })
                    .catch(() => {
                      console.log("실패함");
                      setLoding(false);
                      /* 로딩중숨기기 */
                    }); //catch
                }}>
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}
export default App;
