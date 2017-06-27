import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Flag } from 'semantic-ui-react'
import Avatar from './Avatar'

export default class MainMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>

        <Menu.Item>
          <img src='/Logo.png' alt="inet ltd."/>
        </Menu.Item>
        <Menu.Item header>INET LTD.</Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
            <Link to="/">
          Home
            </Link>
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        ><Link to="/about">
          About
        </Link>
        </Menu.Item>
        <Menu.Item
          name='services'
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
        ><Link to="/services">
          Services
        </Link>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        ><Link to="/portfolio">
          Portfolio
        </Link>
        </Menu.Item>
        <Menu.Item
          name='blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}
        ><Link to="/blog">
          Blog
        </Link>
        </Menu.Item>
        <Menu.Item
          name='contacts'
          active={activeItem === 'contacts'}
          onClick={this.handleItemClick}
        ><Link to="/xontacts">
          Contacts
        </Link>
        </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text='Language'>
          <Dropdown.Menu>
            <Dropdown.Item>
                <Flag name='us' />
                English
            </Dropdown.Item>
            <Dropdown.Item><Flag name='bg' />Български</Dropdown.Item>
            <Dropdown.Item>
                <Flag name='ee' />
                Spanish
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>
          <Avatar />
        </Menu.Item>
        <Menu.Item>
          <Button primary>Sign In</Button>
        </Menu.Item>
      </Menu.Menu>
      </Menu>
    )
  }
}
