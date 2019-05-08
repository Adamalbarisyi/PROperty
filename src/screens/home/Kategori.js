import React, { Component } from "react";

import {Container, Row, Col,Image} from 'react-bootstrap';
import Category from '../../assets/icon_content/Group 415.png';

import Rumah from '../../assets/icon_kategori/1rumahv3.png';
import Apartemen from '../../assets/icon_kategori/2apartmentV3.png';
import Indekos from '../../assets/icon_kategori/3IndekosV3.png';
import Tanah from '../../assets/icon_kategori/4tanahV3.png';
import Ruko from '../../assets/icon_kategori/5rukoV3.png';


import Kantor from '../../assets/icon_kategori/6kantorV3.png';
import Kios from '../../assets/icon_kategori/7kiosV3.png';
import Villa from '../../assets/icon_kategori/8villaV3.png';
import Gedung from '../../assets/icon_kategori/9gedungV3.png';
import Pabrik from '../../assets/icon_kategori/10pabrikV3.png';
 
class Kategori extends Component {
  render() {
    return (
       <Col xs={12} md={9}>
                    <div className="content">
        <h3><img style={{width:45,height:45, marginRight:20}} src={Category} alt="logo"/> Kategori Utama</h3>
        <Container style={{marginTop:60}}>
          <Row>
            <Col>
            <center>
             <button className="btn">
              <Image style={{width:100,height:100,  marginBottom:15}} src={Tanah} rounded alt="logo"/>
              <span>Tanah</span>
              </button>
            </center>
            </Col>
            <Col>
            <center>
             <button className="btn">
               <Image style={{width:100,height:100, marginBottom:15}} src={Rumah} rounded alt="logo"/>
              <span>Rumah</span>
            </button>
              </center>
            </Col>
            <Col>     
              <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Apartemen} rounded alt="logo"/>
              <span>Apartemen</span>
              </center>
              </Col>
            <Col>
            <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Indekos} rounded alt="logo"/>
              <span>Indekos</span>
            </center>
            </Col>
            
            <Col>
            <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Ruko} rounded alt="logo"/>
              <span>Ruko</span>
            </center>
            </Col>
          </Row>
        </Container>

        <Container style={{marginTop:60, marginBottom:49}}>
          <Row>
            <Col>
               <center>
               <Image style={{width:100,height:100,  marginBottom:15}} src={Kantor} rounded alt="logo"/>
               <span>Kantor</span>
               </center>
            </Col>
            <Col>       
              <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Kios} rounded alt="logo"/>
              <span>Kios</span>
              </center>
              </Col>
            <Col>
              <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Villa} rounded alt="logo"/>
              <span>Villa</span>
              </center>
            </Col>
            <Col>
              <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Gedung} rounded alt="logo"/>
              <span>Gedung</span>
              </center>
            </Col>
            <Col>
              <center>
              <Image style={{width:100,height:100,  marginBottom:15}} src={Pabrik} rounded alt="logo"/>
              <span>Pabrik</span>
              </center>
             </Col>
          </Row>
        </Container>
        </div>
      </Col>
    );
  }
}
 
export default Kategori;