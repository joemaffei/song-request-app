import React from 'react';
import styled from 'styled-components';
import MusicIcon from './MusicIcon';
import withFirebase from './withFirebase';

const FooterStyle = styled.footer`
  background: #cfd8dc;
  padding: .5rem;
  display: flex;
  flex-wrap: wrap;
  div {
    margin: .5rem;
    display: flex;
    flex-grow: 8;
  }
  span {
    background: white;
    padding: 0 1rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: #6200ea;
  }
  input {
    flex-grow: 1;
    border: 0;
    padding: 1rem;
    padding-left: 0;
    font-size: 1.25rem;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    flex-grow: 1;
  }
  button {
    padding: 1rem 2rem;
    margin: .5rem;
    font-size: 1.25rem;
    font-weight: bold;
    background: #6200ea;
    border-radius: .5rem;
    color: white;
    border: 0;
    flex-grow: 1;
  }
`;

class Footer extends React.Component {
  state = {
    song: ''
  };

  requestSong = () => {
    const { firebase: { requests, timestamp }} = this.props;

    requests()
      .push({
        title: this.state.song,
        timestamp
      })
      .then(ref => {
        this.setState({ song: '' });
      });
  }

  handleChange = e => {
    this.setState({ song: e.target.value });
  }

  render() {
    return (
      <FooterStyle>
        <div>
          <span>
            <MusicIcon />
          </span>
          <input
            type="text"
            placeholder="What song would you like to hear?"
            value={this.state.song}
            onChange={this.handleChange}
          />
        </div>
        <button type="button" onClick={this.requestSong}>REQUEST SONG</button>
      </FooterStyle>
    )
  }
}

export default withFirebase(Footer);
