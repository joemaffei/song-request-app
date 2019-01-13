import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  padding: 1rem;
  background: #512da8;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Header = () => (
  <HeaderStyle>
    SongRequest
  </HeaderStyle>
);

export default Header;
