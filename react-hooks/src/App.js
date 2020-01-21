import React, { useState } from 'react';
import Counter from './hooks/Counter';
import Info from './hooks/Info';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <Counter />
      <hr />
      {visible && <Info />}
    </>
  )
}

export default App;
