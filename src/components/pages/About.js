import React from 'react'
import { Container, Message } from 'semantic-ui-react'

const About = () => (
    <Container>
        <Message>
            <Message.Header>About</Message.Header>
            <Message.List>
                <Message.Item>You can now have cover images on blog pages</Message.Item>
                <Message.Item>Drafts will now auto-save while writing</Message.Item>
            </Message.List>
        </Message>
    </Container>
)

export default About
