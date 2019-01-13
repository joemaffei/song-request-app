import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import withFirebase from './withFirebase';
import Request from './Request';

const MainStyle = styled.main`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

class Main extends React.Component {
  state = {
    requests: null
  }

  componentDidMount() {
    const { firebase: { requests }} = this.props;
    requests().on('value', response => {
      const responseValue = response.val();

      let responseValueAsArray;
      if (responseValue === null) {
        responseValueAsArray = [];
      } else {
        responseValueAsArray = Object.entries(responseValue).map(([id, value]) => {
          return { id, ...value };
        });
      }

      this.setState({
        requests: responseValueAsArray
      });
    });
  }

  render() {
    const { requests } = this.state;

    let content;
    if (requests === null) {
      content = 'loading...';
    }
    if (isEmpty(requests)) {
      content = 'No one has requested a song yet. Be the first one!'
    } else {
      content = (
        <ul>
          {requests.map((requestProps) => (
            <Request key={requestProps.id} {...requestProps} />
          ))}
        </ul>
      );
    };

    return (
      <MainStyle>
        {content}
      </MainStyle>
    );
  }
}

export default withFirebase(Main);
