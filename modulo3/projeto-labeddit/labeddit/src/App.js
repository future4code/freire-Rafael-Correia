import React from 'react'
import Router from './router/Router'

import GlobalState from './provider/provider';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
