import React, { Component } from "react";
import {ListGroup,Container } from 'react-bootstrap';
 
class Trending extends Component {
  render() {
    return (
      <div>
        <h2>Trending</h2>
          <Container>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
               <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Container>
    </div>  
    );
  }
}
 
export default Trending;