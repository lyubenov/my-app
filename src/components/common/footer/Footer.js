import React from 'react'
import { Container, Segment, Grid, List, Header, Divider } from 'semantic-ui-react'
import Social from './Social'
import './Footer.css'

const Footer = () => (
  <Segment className="footer" raised>
    <Container>
      <Grid columns={4}>
        <Grid.Row>
          <Social />
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">About INet</Header>
              <List>
                <List.Item content={<a href='http://inetood.com'>Our Office</a>} />
                <List.Item content={<a href='http://inetood.com'>On Google Map</a>} />
                <List.Item content={<a href='mailto:admin@inetood.com'>Mail Us</a>} />
                <List.Item content={<a href='tel:http://inetood.com'>Phone Us</a>} />
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h5">INet Values</Header>
              <List>
                <List.Item content={<a href='http://inetood.com'>Accessbillity</a>} />
                <List.Item content={<a href='http://inetood.com'>Enviroment</a>} />
                <List.Item content={<a href='mailto:admin@inetood.com'>Mewsroom</a>} />
                <List.Item content={<a href='http://inetood.com'>Job Opportunities</a>} />
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h5">Account</Header>
              <List>
                <List.Item content={<a href='http://inetood.com'>Sign Up</a>} />
                <List.Item content={<a href='http://inetood.com'>Prefferences</a>} />
                <List.Item content={<a href='http://inetood.com'>Your Invoices</a>} />
                <List.Item content={<a href='http://inetood.com'>Help Desk</a>} />
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h5">Terms</Header>
              <List>
                <List.Item content={<a href='http://inetood.com'>Privacy Policy</a>} />
                <List.Item content={<a href='http://inetood.com'>Terms Of Use</a>} />
                <List.Item content={<a href='http://inetood.com'>Sales And Refunds</a>} />
                <List.Item content={<a href='http://inetood.com'>Site Map</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
      <p>Copyright &copy; 2017 INet Ltd. All rights reserved.</p>
    </Grid.Row>
  </Grid>
  </Container>
</Segment>

)

export default Footer
