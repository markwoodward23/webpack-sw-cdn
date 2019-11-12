import React, { useState } from "react";
import ReactDOM from "react-dom";

const Index = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <button onClick={() => setVal(val+1)}>Send it</button>
      <p>{val}</p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/build.sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}