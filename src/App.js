import './App.css';

function App() {
  const jsKey = process.env.REACT_APP_KAKAO_JAVASCRIPT_API_KEY;

  // console.log(jsKey);
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  return <h1>kakologin</h1>;
}

export default App;
