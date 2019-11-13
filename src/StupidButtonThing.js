import React, { useState } from 'react';

export const StupidButtonThing = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <button onClick={() => setVal(val+1)}>Send it</button>
      <p>{val}</p>
    </div>
  );
};