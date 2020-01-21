import React from 'react';
import logo from './logo.svg';
import './App.css';
// import notify from './notify';

function App() {
  const onClick = () => {
    // notify();
    // 상단에서 import 하지 않고 import() 함수 형태로 메서드 안에서 사용하면 파일을 따로 분리시켜 저장하고, 필요한 시점에 파일을 불러와서 함수를 사용할 수 있다.
    import('./notify').then(result => result.default());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Hello React!
        </p>
      </header>
    </div>
  );
}

export default App;
