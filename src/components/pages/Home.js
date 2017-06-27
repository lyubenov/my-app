import React from 'react'
import { Message, Container} from 'semantic-ui-react'

const Home = () => (
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

export default Home
