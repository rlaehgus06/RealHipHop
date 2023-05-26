import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_Bricks from './FINAL겟잇/Main_Bricks';
import Industry_Inform from './FINAL겟잇/Industry_information';
import Second_Main from './gyunghyun/src/founder';
import FundingPage from './fundingpage/funding'
import LoginPage from './loginPage/loginPage'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main_Bricks />} />
        <Route path="/industry" element={<Industry_Inform />} />
        <Route path="/Second_Main" element={<Second_Main/>}/>
        <Route path="/FundingPage" element={<FundingPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
