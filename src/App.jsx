import { useReducer, useState } from 'react';
// import { flushSync } from 'react-dom';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  // const [count, setCount] = useState(0);
  // const plusCount = () => setCount(count + 1);
  // const minusCount = () => setCount(count - 1);

  // action : {type: 'plus' | 'minus', payload: count}
  const reducer = (count, action) => {
    switch (action.type) {
      case 'plus':
        return count + (action.payload ?? 1);
      case 'minus':
        return count - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = (cnt) => dispatch({ type: 'plus', payload: cnt });
  const minusCount = () => dispatch({ type: 'minus' });

  return (
    <div className='App'>
      <div>
        <Hello name='시코' weather='맑음' />
      </div>
      <hr />
      {/* <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
      /> */}
      <SessionProvider>
        <My />
      </SessionProvider>

      <hr />
      <div className='card'>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/* <button onClick={() => setCount(count + 1)}>Plus</button> */}
        <button onClick={() => plusCount(30)}>Plus 30</button>
        <strong>{count}</strong>
        {/* <button onClick={() => setCount(count - 1)}>Minus</button> */}
        <button onClick={minusCount}>Minus</button>
      </div>
    </div>
  );
}

export default App;