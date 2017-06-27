import React from 'react'
import { Message, Container } from 'semantic-ui-react'

const Portfolio = () => (
        <Container>
            <Message>
                <Message.Header>Portfolio</Message.Header>
                <Message.List>
                    <Message.Item>You can now have cover images on blog pages</Message.Item>
                    <Message.Item>Drafts will now auto-save while writing</Message.Item>
                </Message.List>
            </Message>
        </Container>
);

export default Portfolio
