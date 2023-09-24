import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((v) => v.id == id);
  return (
    <div>
      <div className="alert alert-warning">3초이내 구매시 할인</div>
      <div className="container">
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
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.data}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Detail;
