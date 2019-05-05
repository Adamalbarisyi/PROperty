import React, { Component } from "react";

import {Container, Row, Col,Image} from 'react-bootstrap';
import coba from '../../assets/images/coba.jpg';
 
class Kategori extends Component {
  render() {
    return (
      <div>
        <h2>Kategori Utama</h2>
        <Container>
          <Row>
            <Col>
               <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>       
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span></Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
          </Row>
        </Container>

        <Container >
          <Row>
            <Col>
               <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>       
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span></Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
            <Col>
              <Image style={{width:100,height:160}} src={coba} rounded alt="logo"/>
              <span>Rumah</span>
            </Col>
          </Row>
        </Container>
        
      
      </div>
    );
  }
}
 
export default Kategori;