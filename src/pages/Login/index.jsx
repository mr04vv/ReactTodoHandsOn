import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import useReactRouter from 'use-react-router';

const Login = () => {
  const { history } = useReactRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        history.push({
          pathname: '/'
        })
      }
      setIsLoading(false)
    })
  }, [history])

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    setIsLoading(true);
  }

  return (
    <ButtonContainer>
      <LoginButton onClick={() => login()}>login</LoginButton>
      {isLoading && <div>loading</div>}
    </ButtonContainer>
  )
};

export default Login;

const LoginButton = styled.button`
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;