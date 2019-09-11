import { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import useReactRouter from 'use-react-router';

const useLogin = () => {
  const [uid, setUid] = useState('');
  const { history } = useReactRouter();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid)
      } else {
        history.push({
          pathname: '/login'
        })
      }
    })
  }, [history])

  return {
    uid
  }
}

export default useLogin;