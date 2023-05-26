import React from 'react';
import { auth } from '.././fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        signOut,
       } from "firebase/auth";
import { useState } from 'react';

function Login() {
    const [userData, setUserData] = useState(null);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    
    function changeState(){
        onAuthStateChanged(auth, (currentUser) => {
                setUserData(currentUser);
        });
    }
    function signIn() {
        createUserWithEmailAndPassword(auth, Email, Password)
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

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
    
  function emailLogin() {
    changeState()
    const user = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithEmailAndPassword(auth, Email, Password) // 이메일을 이용한 로그인
      .then((userCredential) => {
        setUserData = userCredential.user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
    
    function logOut() {
        changeState()
        signOut(auth)
          .then(() => {          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

  return (
    <div>
          <h3>구글 로그인 테스트</h3>
          <button onClick={handleGoogleLogin}>Login</button>
          <h4>로그인 하면 아래쪽에 이름이 나타납니다.</h4>
          {userData ? "너의 이름은 : " + userData.displayName : "로그인 해라" }
          
          <div>
          {/*회원가입*/}
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
          <button onClick = {signIn}>CreateUser</button>
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
                <button onClick={emailLogin}>Login</button>
                <div>User Logged In:</div>
                <div>{userData ? "로그인 됨" : "로그인 안되있음"}</div>
                <button onClick={logOut}>로그아웃</button>
            </div>
    </div>
      
  );
}

export default Login;