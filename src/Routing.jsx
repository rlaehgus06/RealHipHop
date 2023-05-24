import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_Bricks from './FINAL겟잇/Main_Bricks';
import Industry_Inform from './FINAL겟잇/Industry_information';
import Second_Main from './gyunghyun/src/aaa';
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main_Bricks />} />
        <Route path="/industry" element={<Industry_Inform />} />
        <Route path="Second_Main" element={<Second_Main/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
