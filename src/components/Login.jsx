import { useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';

// export const Login = ({ login }) => {
export const Login = () => {
  console.log('@@ Login');
  const { login } = useSession();
  // const [userId, setUserId] = useState(10);
  // const [userName, setUserName] = useState('홍길동');
  const userIdRef = useRef();
  const userNameRef = useRef();

  // window.addEventListener('load', () => { })
  useEffect(() => {
    userIdRef.current.focus();
  }, []);

  console.log('End of Login');

  return (
    <>
      <h2>Login Please</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userIdRef.current.value, userNameRef.current.value);
        }}
      >
        <label htmlFor='user-id'>UserID:</label>
        {/* <input
          id='user-id'
          type='number'
          value={userId}
          onChange={(evt) => setUserId(evt.target.value)}
        /> */}
        <input type='number' ref={userIdRef} />

        <label htmlFor='user-name'>UserName:</label>
        {/* <input
          id='user-name'
          type='text'
          value={userName}
          onChange={(evt) => setUserName(evt.target.value)}
        /> */}
        <input type='text' ref={userNameRef} />

        <button type='submit'>로그인</button>
      </form>
    </>
  );
};
