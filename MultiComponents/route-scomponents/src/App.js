import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Student from './Pages/Student';
import Courses from './Pages/Courses';
import Layout from './Pages/Layout';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/home' element={<Home />}></Route> */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='student' element={<Student />}></Route>
            <Route path='courses' element={<Courses/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
