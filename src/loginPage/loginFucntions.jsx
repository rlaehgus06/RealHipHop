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

export {signIn, emailLogin, logOut};