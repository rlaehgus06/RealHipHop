import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    
  return (
    <div className="e56_11">
      <div className="e91_35">
        <span className="e56_12">CHANGUP</span>
        <div className="e61_11"></div>
        <div className="e60_108"></div>
        <span className="e60_112">ID</span>
        <div className="e60_110"></div>
        <div className="e61_38"></div>
        <span className="e60_113">PW</span>
        <span className="e60_115">아이디찾기</span>
        <span className="e60_116">비밀번호찾기</span>
        <span className="e60_124">로그인하기</span>
        <div className="e60_125">
          <div className="e60_129"></div>
        </div>
        <div className="e60_130">
          <div className="e60_134"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
