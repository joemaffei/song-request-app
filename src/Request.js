import React from 'react';
import styled from 'styled-components';

const RequestStyle = styled.li`
	background: #00000011;
	border-radius: .5rem;
	padding: .75rem 1rem;
	margin-bottom: 4px;
	overflow-x: auto;
	white-space: nowrap;
`;

const Request = ({ id, title }) => {
	return (
		<RequestStyle>
			{title}
		</RequestStyle>
	);
}

export default Request;
