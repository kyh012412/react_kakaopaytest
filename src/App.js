import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [loginResult, setLoginResult] = useState(false);

  useEffect(() => {
    const jsKey = process.env.REACT_APP_KAKAO_JAVASCRIPT_API_KEY;

    const scope = 'profile_nickname,profile_image';

    // SDK는 한 번만 초기화해야 한다.
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(jsKey);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }

    window.Kakao.Auth.login({
      scope,
      success: function (response) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
        setLoginResult(true);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }, []);

  return (
    <div>
      <h1>Kakao Login: {loginResult ? 'Success' : 'Not yet'}</h1>
      {/* {window.Kakao.isInitialized() || (
        <script
          src={`https://developers.kakao.com/sdk/js/kakao.min.js?appkey=${jsKey}`}
        ></script>
      )} */}
    </div>
  );
}

export default App;
