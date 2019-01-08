import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	padding: 1rem;
	background: black;
	color: white;
`;

const Header = () => (
	<HeaderStyle>
		<h1>song-request-app</h1>
	</HeaderStyle>
);

export default Header;
