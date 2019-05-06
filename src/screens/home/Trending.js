import React, { Component } from "react";
import {ListGroup,Container } from 'react-bootstrap';
import Trend from '../../assets/icon_content/Group 416.png';
class Trending extends Component {
  render() {
    return (
      <div>
        <h3> <img style={{width:45,height:45, marginRight:10}} src={Trend}  alt="logo"/>Trending</h3>
          <Container>
            <ListGroup variant="flush" style={{marginLeft:-20}}>
              <ListGroup.Item style={{marginBottom:-5}}>1. Rumah</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>2. Tanah</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>3. Indekos</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>4. Apartemen</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>5. Villa</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>6. Ruko</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>7. Kios</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>8. Gedung</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-5}}>9. Kantor</ListGroup.Item>
              <ListGroup.Item style={{marginBottom:-13}}>10. Pabrik</ListGroup.Item>

            </ListGroup>
          </Container>
    </div>  
    );
  }
}
 
export default Trending;