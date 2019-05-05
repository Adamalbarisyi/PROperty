import React, { Component } from "react";
import {ListGroup,Container } from 'react-bootstrap';
 
class Trending extends Component {
  render() {
    return (
      <div>
        <h2>Trending</h2>
          <Container>
            <ListGroup variant="flush" style={{marginLeft:-20}}>
              <ListGroup.Item>1. Rumah</ListGroup.Item>
              <ListGroup.Item>2. Tanah</ListGroup.Item>
              <ListGroup.Item>3. Indekos</ListGroup.Item>

              <ListGroup.Item>4. Apartemen</ListGroup.Item>

              <ListGroup.Item>5. Villa</ListGroup.Item>

              <ListGroup.Item>6. Ruko</ListGroup.Item>

              <ListGroup.Item>7. Kios</ListGroup.Item>

              <ListGroup.Item>8. Gedung</ListGroup.Item>

              <ListGroup.Item>9. Kantor</ListGroup.Item>

              <ListGroup.Item>10. Pabrik</ListGroup.Item>
            </ListGroup>
          </Container>
      </div>
    );
  }
}
 
export default Trending;