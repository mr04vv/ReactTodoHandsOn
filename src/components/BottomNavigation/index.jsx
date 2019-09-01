import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Assignment from '@material-ui/icons/Assignment';
import Done from '@material-ui/icons/Done';
import styled from 'styled-components';

const SimpleBottomNavigation = ({tabIndex, setTabIndex}) => {

  return (
    <BottomNavigationWrapper>
      <BottomNavigation
        value={tabIndex}
        onChange={(event, newValue) => {
          setTabIndex(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="すべて" icon={<Home />} />
        <BottomNavigationAction label="未完了" icon={<Assignment />} />
        <BottomNavigationAction label="完了済み" icon={<Done />} />
      </BottomNavigation>
    </BottomNavigationWrapper>
  );
}

export default SimpleBottomNavigation;

const BottomNavigationWrapper = styled.div`
  @media(min-width: 480px) {
    display: none;    
  }
  position: fixed;
  bottom: 0;
  width: 100%;
`;