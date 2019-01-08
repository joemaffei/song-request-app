import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  padding: 1rem;
  background: black;
  color: white;
  font-size: 2rem;
`;

const Header = () => (
  <HeaderStyle>
    SongRequest
  </HeaderStyle>
);

export default Header;
