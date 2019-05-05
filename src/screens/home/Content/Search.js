   import React, { Component } from 'react'

import {Navbar, Form, FormControl, 
  Dropdown,
  Container,
  DropdownButton,
  InputGroup} from 'react-bootstrap';

export default class Search extends Component {
   _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Proses Mencari');
    }
  }

   render() {
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
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}></InputGroup.Text>
                          </InputGroup.Prepend>

                        <DropdownButton as={InputGroup.Append} style={{marginLeft:-22, paddingRigth:30}} variant="light" title="Semua Jenis" id="input-group-dropdown-2" onSelect={function(evt){console.log(evt)}}>
                          <Dropdown.Item eventKey='jual'>Jual</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey='sewa'>Sewa</Dropdown.Item>
                        </DropdownButton>

                      </InputGroup>

                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Cari Kata Kunci.." aria-label="Username" onKeyDown={this._handleKeyDown}  aria-describedby="basic-addon1" />
                      </InputGroup>

                  </Form>
              </Navbar>          
            </Container>
            )
  }
}