import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice";
import { changeCount } from "../store.js";

const Cart = () => {
  let a = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {" "}
        {a.user.name} {a.user.age}
      </h6>

      <button
        onClick={() => {
          dispatch(increase(5));
        }}>
        버튼 age
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.bucket.map((v, i) => {
            let { count, id, name } = v;
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(i));
                    }}>
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
