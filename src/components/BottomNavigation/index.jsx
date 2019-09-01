import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Done from '@material-ui/icons/Done';
import styled from 'styled-components';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigationWrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="すべて" icon={<Home />} />
        <BottomNavigationAction label="未完了" icon={<PlayCircleOutline />} />
        <BottomNavigationAction label="完了済み" icon={<Done />} />
      </BottomNavigation>
    </BottomNavigationWrapper>
  );
}

const BottomNavigationWrapper = styled.div`
  @media(min-width: 480px) {
    display: none;    
  }
  position: absolute;
  bottom: 0;
  width: 100%;
`;