import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {ButtonToolbar, Button} from 'react-bootstrap';

import Kategori from "./screens/home/Kategori";
import Trending from "./screens/home/Trending";
import Property from "./screens/home/Property";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="header">
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row >
                      <Col xs={12} md={8} className="header-left">
                          <span>PROperty</span>
                      </Col>
                      <Col xs={12} md={4} className="header-right">
                       <ButtonToolbar style={{alignSelf: 'flex-end'}}>
                        <Button variant="secondary">Login</Button>
                        <Button variant="secondary">Daftar</Button>
                      </ButtonToolbar>
                      </Col>
                    </Row>
                  </Container>;
          </div>
          <div className="main-content">
          
          <Container>
               <Row>
                  <Col xs={12} md={8}>
                   <div className="content">
                     <Route exact path="/" component={Kategori}/>
                   </div>
                  </Col>
                   
                  <Col xs={12} md={4}>
                     <div className="content">
                     <Route exact path="/" component={Trending}/>
                   </div>
                  </Col>
                </Row>
          </Container>

          
          <Container>
                <Row>
                  <Col xs={12} md={12}>
                   <div className="content">
                    <Route exact path="/" component={Property}/>
                     </div>
                  </Col>
                </Row>
         
          </Container>
        </div>



        </div>
      </HashRouter>
    );
  }
}
 
export default Main;