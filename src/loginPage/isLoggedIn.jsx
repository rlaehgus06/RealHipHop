import React, { useEffect, useState } from 'react';
import { auth } from '../fbase';

const isLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    // 컴포넌트가 언마운트되면 리스너 구독 취소
    return () => unsubscribe();
  }, []);

  return loggedIn;
};

export default isLoggedIn;
