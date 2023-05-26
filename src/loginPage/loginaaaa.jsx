import React from 'react';
import { auth } from '.././fbase';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        signOut,
       } from "firebase/auth";

import { useState } from 'react';

function signIn(a, Email, Password) {
  createUserWithEmailAndPassword(a, Email, Password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function emailLogin(a, Email, Password, setStateFunction) {
  onAuthStateChanged(a, (currentUser) => {
    setStateFunction(currentUser);
  });
  const user = new GoogleAuthProvider(); // provider를 구글로 설정
  signInWithEmailAndPassword(a, Email, Password) // 이메일을 이용한 로그인
    .then((userCredential) => {
      setStateFunction(userCredential.user);
    })
    .catch((err) => {
      console.log(err);
    });
}

function logOut(a, setStateFunction) {
  onAuthStateChanged(a, (currentUser) => {
    setStateFunction(currentUser);
  });
  signOut(a)
    .then(() => {
      // userdata 초기화 등 로그아웃 이후의 동작 추가
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function Login() {
  const [userData, setUserData] = useState(null);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(auth, Email, Password);
  };

  const handleEmailLogin = () => {
    emailLogin(auth, Email, Password, setUserData);
  };

  const handleLogOut = () => {
    logOut(auth, setUserData);
  };

  return (
    <div>
      <div>
        {/* 회원가입 */}
        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="EmailPassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSignIn}>CreateUser</button>
      </div>

      <div>
        {/* 로그인 */}
        <h3>Login</h3>
        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleEmailLogin}>Login</button>
        <div>User Logged In:</div>
        <div>{userData ? "로그인 됨" : "로그인 안되있음"}</div>
        <button onClick={handleLogOut}>로그아웃</button>
      </div>
    </div>
  );
}

export default Login;