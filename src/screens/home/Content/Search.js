   import React, { Component } from 'react'

import {Navbar, Form, FormControl, 
  Dropdown,
  Container,
  DropdownButton, ListGroup,
  Popover, OverlayTrigger,
  InputGroup} from 'react-bootstrap';


export default class Search extends Component {


constructor(props) {
    super(props);

    
  this.state = {
      jenis: 'Semua Jenis',
      alamat: 'Semua',
  }
}

   _handleFind = (e) => {
    if (e.key === 'Enter') {
      console.log('Proses Mencari');
      console.log(this.state.alamat);
              
    }
  }

   render() {
    const Pop_alamat = (
  <Popover  title="Pilih Lokasi">
  <ListGroup variant="flush" id="alamat">

              <ListGroup.Item onClick={() => this.setState({alamat:'Semua'})}>Semua Lokasi</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'Yogyakarta'})}>Yogyakarta</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'KulonProgo'})}>KulonProgo</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'Bantul'})}>Bantul</ListGroup.Item>
            </ListGroup>
  </Popover>
);
    return (
   <Container style={{marginBottom:-20}}>
              <Navbar.Brand style={{color: 'white'}}>
              <b>
              Proday
              </b>
              </Navbar.Brand>
              <Navbar bg="none" variant="dark">
                  <Form inline>
                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i class="material-icons">location_on</i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <OverlayTrigger trigger="focus" placement="bottom" overlay={Pop_alamat}>
                          <FormControl id="icon_search" placeholder={"Pilih Lokasi "+this.state.alamat} aria-label="Username"/>
                          </OverlayTrigger>
                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i class="material-icons">
                              format_list_bulleted
                              </i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Kategori" aria-label="Kategori" id="icon_search" />
                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}></InputGroup.Text>
                          </InputGroup.Prepend>

                        <DropdownButton as={InputGroup.Append} style={{marginLeft:-22}} variant="light" title={this.state.jenis}  id="input-group-dropdown-2">
                              <Dropdown.Item eventKey='jual' onClick={() => this.setState({jenis:'Semua Jenis'})}>Semua Jenis</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey='jual' onClick={() => this.setState({jenis:'Dijual'})}>Jual</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey='sewa' onClick={() => this.setState({jenis:'Sewa'})}>Sewa</Dropdown.Item>
                        </DropdownButton>

                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i class="material-icons">
                              search
                              </i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Cari Kata Kunci.." aria-label="Username" onKeyDown={this._handleFind}  id="icon_search" />
                      </InputGroup>

                  </Form>
              </Navbar>          
            </Container>
            )
  }
}