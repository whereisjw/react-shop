import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data";
import Card from "./Card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Event from "./routes/Event";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

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
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}
export default App;
