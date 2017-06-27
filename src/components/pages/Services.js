import React from 'react';
import { Container, Message } from 'semantic-ui-react';

export default class Services extends React.Component {
  static propTypes = {

  };
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
        <Container>
          <Message>
            <Message.Header>Home</Message.Header>
            <Message.List>
              <Message.Item>You can now have cover images on blog pages</Message.Item>
              <Message.Item>Drafts will now auto-save while writing</Message.Item>
            </Message.List>
          </Message>
        </Container>
    );
  }
}
