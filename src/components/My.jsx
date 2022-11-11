import { useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import { Profile } from './Profile';

// export const My = ({ session, login, logout, removeCartItem }) => {
export const My = () => {
  // console.log('@@@ My');
  const { session, removeCartItem } = useSession();
  const [sec, setSec] = useState(0);
  const ulRef = useRef();

  // run * 2 ===> (render -> [useLayoutEffect] -> mount -> [useEffect]) -> unMount -> mount
  /*
  [1, 2, 3].reduce((pre, a) => pre + a, 0);

  pre      currentValue(a)         action
   0             1                 0 + 1
   1             2                 1 + 2
   3             3                 3 + 3
   return 6;
*/
  useEffect(() => {
    // console.log('ul-height>>', ulRef.current.clientHeight);
    const intl = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);

    return () => clearInterval(intl);
  }, []);

  return (
    <>
      <div>sec: {sec}</div>
      {session.loginUser ? (
        // <Profile session={session} logout={logout} />
        <Profile />
      ) : (
        // <Login login={login} />
        <Login />
      )}

      <div>
        <ul ref={ulRef}>
          {session.cart.map((item) => (
            <li key={item.id}>
              {item.name} <small>(₩{item.price.toLocaleString()})</small>
              <button onClick={() => removeCartItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
