import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncHello = Loadable({
  loading: <div>loading...</div>,
  loader: () => import('./Hello'), 
})

const AsyncStupidButtonThing = Loadable({
  loading: <div>loading...</div>,
  loader: () => import('./StupidButtonThing'), 
})

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={AsyncHello} />
      <Route exact path="/hello" component={AsyncStupidButtonThing} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("index"));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/build.sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
