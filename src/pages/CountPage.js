import React, { useState } from 'react';
//new comment
//new comment from testing
function CountPage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(4);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 2)}>
        Click me
      </button>
    </div>
  );
}

export default CountPage