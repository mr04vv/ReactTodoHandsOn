import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';

const PCTab = ({tabIndex, setTabIndex}) => {

  return (
      <TabsContainer
        value={tabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={(_, newValue) => setTabIndex(newValue)}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="すべて" />
        <Tab label="未完了" />
        <Tab label="完了済み" />
      </TabsContainer>
  );
}

export default PCTab;

const TabsContainer = styled(Tabs)`
  @media(max-width: 480px) {
    display: none;    
  }
`;