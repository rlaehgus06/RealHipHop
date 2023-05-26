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
  return new Promise((resolve, reject) => {
    onAuthStateChanged(a, (currentUser) => {
      setStateFunction(currentUser);
    });
    const user = new GoogleAuthProvider();
    signInWithEmailAndPassword(a, Email, Password)
      .then((userCredential) => {
        setStateFunction(userCredential.user);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
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