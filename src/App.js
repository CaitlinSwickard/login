import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

