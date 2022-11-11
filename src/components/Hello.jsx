import { useReducer } from 'react';

export const Hello = (props) => {
  console.log('@@@@@ Hello');
  // const [isActive, setIsActive] = useState(false);
  const [isActive, toggleActive] = useReducer((pre) => !pre, false);

  return (
    <>
      <h1>Hello, {props.name}!</h1>
      <h3>
        날씨: {props.weather} - {isActive && '^^'}
      </h3>
      {/* <button onClick={() => setIsActive(!isActive)}> */}
      <button onClick={toggleActive}>
        Toggle Active: {isActive ? 'Active!' : ''}
      </button>
    </>
  );
};

export const Hello2 = ({ name, children }) => {
  return (
    <>
      <h1>Hi~ {name} !</h1>
      {children}
    </>
  );
};