# react bootstrap 오류

![Alt text](image.png)

cannot be invoked without 'new'

#### import { Button } from "react-bootstrap";

부트스트랩 자동 import 값 from 이후 "react-bootstrap"; 여야하는데 "bootstrap"; 으로 자동완성됨

# 이미지 인라인으로 넣는법

```
import bg from "./img/dum1.png";
style={{ backgroundImage: "url(" + bg + ")" }}
```

----------------------------------------------\
리액트 라우터 돔 npm install react-router-dom@6
터미널에 설치
index.js에

```
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

브라우저 라우터 import해서 코드작성

app.js에서 route,routes,link,navigate,nested routes import하기

```
import { Routes, Route, Link } from "react-router-dom";
    <Link to="/detail">상세페이지</Link>
        <Routes>
    <Route path="/detail" element={<Detail />} />
      </Routes>

       <Nav.Link
              onClick={() => {
                navigate("/");
              }}>
              홈
            </Nav.Link>

                <Route path="*" element={<div>없는페이지입니다</div>} />




```

nested Routes

```
<Route path="/about" element={<About />}>
    <Route path="member" element={<About />} />
    <Route path="location" element={<About />} />
</Route>
```

```
import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </>
  );
};

export default About;
```

'

# styled-components

npm install styled-components
import styled from "styled-components";

```
  let YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: black;
    padding: 7px 10px;
  `;
***
      <YellowBtn bg="blue">버튼 </YellowBtn>
      <YellowBtn bg="orange">버튼 </YellowBtn>
```
