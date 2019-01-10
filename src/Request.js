import React from 'react';
import styled from 'styled-components';

const RequestStyle = styled.li`
	background: #00000011;
	border-radius: .5rem;
	padding: 1rem;
	margin-bottom: 1rem;
`;

const Request = ({ id, title }) => {
	return (
		<RequestStyle>
			{title}
		</RequestStyle>
	);
}

export default Request;
