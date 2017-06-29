import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Perspective } from './common/header/Perspective';
import MainMenu from './common/header/MainMenu';
import Footer from './common/footer/Footer';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';

class App extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
	render() {
		return (
                  <div>
                    <Container fluid>
                      <MainMenu />
                      <Perspective />
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Footer />
                    </Container>
                  </div>
		)
	}
}

export default App;
