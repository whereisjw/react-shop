# 상품평,리뷰,Q&A 태그만들기

```
<Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link-0">
              Option 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link-1">
              Option 2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link-2">
              Option 3
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}></TabContent>
```

```
function TabContent(props) {
  if (props.탭 == 0) {
    return <div>내용0</div>;
  }
  if (props.탭 == 1) {
    return <div>내용1</div>;
  }
  if (props.탭 == 2) {
    return <div>내용2</div>;
  }
}
```

### AUTOMATIC BATCHING react에서 애니메이션주기

```
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
```

# redux로 장바구니 만들기

```
npm install @reduxjs/toolkit react-redux
```

터미널에 입력

```
import { configureStore, createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "state이름",
  initialState: "값",
});

export default configureStore({
  reducer: {},
});

```

store.js 파일 만들어서 코드복붙하기

```
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
```

index.js에서 provider로 감싸기

```
  let a = useSelector((state) => {
    return state;
  });
```

useSelector 함수 적기

### redux 함수변경

1.변경함수만들기(reducers)
2.export(디스트럭쳐링으로 하면 용이)

```
export let { changNwame } = user.actions;
```

3.dispatch로 변경

```
  let dispatch = useDispatch();
     dispatch(changeName());
```
