import React from 'react';
import styled from 'styled-components';
import music from './music.svg';

const FooterStyle = styled.footer`
  background: gray;
  padding: 1rem;
  display: flex;
  img {
    background: white;
    padding: 0 1rem;
  }
  input {
    flex-grow: 1;
    margin-right: 1rem;
    border: 0;
    padding: 1rem;
    font-size: 1.25rem;
  }
  button {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: bold;
    background: black;
    color: white;
    border: 0;
  }
`;

const Footer = () => (
  <FooterStyle>
    <img src={music} alt="" />
    <input type="text" placeholder="What song would you like to hear?"/>
    <button type="button">REQUEST SONG</button>
  </FooterStyle>
);

export default Footer;
