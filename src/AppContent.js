import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const AppContentStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppContent = () => (
  <AppContentStyle>
    <Header/>
    <Main />
    <Footer />
  </AppContentStyle>
);

export default AppContent;
