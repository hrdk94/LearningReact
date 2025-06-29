import { useState } from 'react';

function IncBox() {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={incCount}>Click me to Inc!</button>
    </div>
  );
}

export default IncBox;
