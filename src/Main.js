import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {ButtonToolbar, Button, Navbar, Nav, Form, FormControl, 
  Dropdown,
  DropdownButton,
  InputGroup} from 'react-bootstrap';

import Kategori from "./screens/home/Kategori";
import Trending from "./screens/home/Trending";
import Property from "./screens/home/Property";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
    <div>
        <div className="header" >
            <Container style={{marginBottom:-20}}>
              <Navbar.Brand style={{color: 'white'}}>Proday</Navbar.Brand>
              <Navbar bg="none" variant="dark">
                  <Form inline>
                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Pilih Lokasi" aria-label="Username" aria-describedby="basic-addon1" />
                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Kategori" aria-label="Kategori" aria-describedby="basic-addon1" />
                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}>Semua Jenis</InputGroup.Text>
                          </InputGroup.Prepend>
                          <DropdownButton as={InputGroup.Append} variant="light" title="" id="input-group-dropdown-2">
                              <Dropdown.Item href="#">Action</Dropdown.Item>
                              <Dropdown.Item href="#">Another action</Dropdown.Item>
                              <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#">Separated link</Dropdown.Item>
                          </DropdownButton>
                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Cari Kata Kunci.." aria-label="Username" aria-describedby="basic-addon1" />
                      </InputGroup>

                  </Form>
              </Navbar>          
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