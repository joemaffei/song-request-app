import React from 'react';
import styled from 'styled-components';

const SongPickerStyle = styled.div`
	margin: .5rem;
	border-radius: .5rem;
	width: 100%;
	max-height: 15rem;
	overflow-y: auto;
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 100%;
		li {
			padding: 1rem;
			width: 100%;
			box-sizing: border-box;
			background: white;
			cursor: pointer;
			overflow-x: auto;
			white-space: nowrap;
			&:hover {
				background: #fec;
			}
		}
		li + li {
			margin-top: 1px;
		}
	}
`;

const SongPicker = ({ searchResults, onClick }) => {
	if (searchResults === null) return null;

	const songOptions = searchResults.map(song => {
		const {name, artist, url} = song;
		return (
			<li key={url} onClick={() => onClick(song)}>
				{name} - {artist}
			</li>
		);
	});

	return (
		<SongPickerStyle>
			<ul>
				{songOptions}
			</ul>
		</SongPickerStyle>
	);
};

export default SongPicker;
