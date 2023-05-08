import { useState } from 'react';
import NestedComponent from './NestedComponent';
import { flushSync } from 'react-dom';

const UseStateExample = () => {
  const [parentAge, setParentAge] = useState(42);
  const [childAge, setChildAge] = useState(17);

  console.log('rerender');

  const computeAgeTwice = (dif: number) => {
    // setAge(age + dif);
    // setAge(age + dif);

    flushSync(() => {
      setChildAge((prev) => prev + dif);
      setChildAge((prev) => prev + dif);
    });

    flushSync(() => {
      setParentAge((prev) => prev + dif);
      setParentAge((prev) => {
        // console.log('Previous value on 2nd run:', prev);
        return prev + dif;
      });
    });
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>Parent age: {parentAge}</div>
      <div style={{ marginBottom: '10px' }}>Child age: {childAge}</div>
      <div>
        <button onClick={() => computeAgeTwice(1)}>Increment</button>
        <button onClick={() => computeAgeTwice(-1)}>Decrement</button>
      </div>
      <NestedComponent age={parentAge} />
    </div>
  );
};

export default UseStateExample;
