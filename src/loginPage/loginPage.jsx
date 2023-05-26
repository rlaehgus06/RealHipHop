import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { auth } from '.././fbase';

import { signIn, emailLogin, logOut, } from "./loginFucntions";

const LoginPage = () => {
    const [userData, setUserData] = useState(null);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignIn = () => {
        signIn(auth, Email, Password);
    };
    const handleEmailLogin = () => {
        emailLogin(auth, Email, Password, setUserData)
        .then(() => {navigate("/Second_Main");})
        .catch((error) => {
            console.log('로그인 에러');
            alert("아이디나 비밀번호가 잘못되었습니다.");
        });
    };
    const handleLogOut = () => {
        logOut(auth, setUserData);
    };
    
    return (
    <div className="e56_11">
      <div className="e91_35">
        <span className="e56_12">CHANGUP</span>
        <div className="e61_11"></div>
        <input className="e60_108" placeholder="ID" onChange={(e) => {
            setEmail(e.target.value);
          }}></input>
        <input className="e60_110" placeholder="PW" onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
        <button className="e61_38" onClick = {handleEmailLogin}><span className="e60_124">로그인하기</span></button>
        <span className="e60_115">아이디찾기</span>
        <span className="e60_116">비밀번호찾기</span>
      </div>
    </div>
  );
}

export default LoginPage;