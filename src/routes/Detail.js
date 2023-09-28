import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  useEffect(() => {
    setFade2("end");
  }, []);
  let [fade2, setFade2] = useState("");
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((v) => v.id == id);
  return (
    <div>
      {alert == true ? (
        <div className="alert alert-warning">3초이내 구매시 할인</div>
      ) : null}
      <div className={`container start ${fade2}`}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          버튼
        </button>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="숫자만 입력하세요" />
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.data}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link-0">
              상품평
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link-1">
              리뷰
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link-2">
              Q&A
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent shoes={props.shoes} 탭={탭}></TabContent>
      </div>{" "}
    </div>
  );
};
function TabContent(props) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [props.탭]);
  return (
    <div className={`start ${fade}`}>
      {
        [<div>{props.shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][
          props.탭
        ]
      }
    </div>
  );
}
export default Detail;
