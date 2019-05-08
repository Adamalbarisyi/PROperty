import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Facebook from '../assets/icon_social_media/Facebook.png';
import Instagram from '../assets/icon_social_media/Instagram.png';
import Twitter from '../assets/icon_social_media/Twitter.png';
class Footer extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>
                            <div className="content">
                    <div style={{}}>
                        <div style={{marginLeft:-20,marginRight:-20,marginBottom:-5,marginTop:-20,padding:30}}>
                            <span style={{fontSize:30,color:"#5b7ac6",marginRight:15}}><b>PROperty</b></span>
                            <span style={{fontSize:18,marginRight:150}}>Temukan kemudahan dalam bertransaksi property</span>
                            <span style={{fontSize:20}}>Follow kami di : </span>
                            <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Facebook}  alt="Facebook"/>
                            <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Instagram}  alt="Instagram"/>
                            <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Twitter}  alt="Twitter"/>
                        </div>
            <div style={{marginLeft:-20,marginRight:-20,marginBottom:-20,padding:30,background:"#e8edf1"}} >
                <span style={{fontSize:16}}><center>2019 All Rights Reserved PROperty.com</center></span>
            </div>
        </div>
         </div>
                    </Col>
                </Row>
        </Container>
    );
  }
}
 
export default Footer;