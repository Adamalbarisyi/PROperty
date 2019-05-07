import React, { Component } from 'react';
import { Route,NavLink,  HashRouter } from 'react-router-dom';
import Search from '../Content/Search';
import PropertyPIlihan from '../Content/PropertyPilihan';
import { Card, Button, Container, Badge } from 'react-bootstrap';
import Slider from "react-slick";

export default class Carousel_trending extends Component {
  render () {
    let children = []
           if (this.state.isLoad) {
               children = this.state.data
               console.log(children)
           }
      return (
          <div>
            <Search/>
            <PropertyPIlihan/>

            <div>
                <Container>
    <div style={{paddingBottom:30}}>
        { ! this.state.isLoad && <label>Loading ... </label> }
        <Slider >
            { this.state.isLoad && children.map((value, index) =>

            <React.Fragment key={value.id}>
              <center>
                <Card style={{ width: '16rem',margin:10}}>
                    
                        <Card.Img  variant="top" src="http://via.placeholder.com/286x180" />
                 
                    <Card.Body>
                        <Badge variant="secondary">{value.kategori}</Badge>
                        <Card.Title style={{fontWeight:540}}>{(value.title.substring(0,60))}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{value.alamat}</Card.Subtitle>
                        <Card.Title style={{color: '#3D87F3',marginTop:25, marginBottom:25, fontWeight:500, float: 'left'}}>
                        Rp {this.ambilangka(value.harga)}
                            <h2 style={{fontSize:15, color: '#95a5a6', float: 'right', marginLeft:10}}> {this.nego(value.nego)}</h2>
                        </Card.Title>
                        <HashRouter>
                          <Button  variant="outline-warning" style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center'}}>
                          Hubungi Penjual</Button>
                        </HashRouter>
                    </Card.Body>

                </Card>
                </center>
            </React.Fragment>

            ) }
        </Slider>

    </div>
</Container>
            </div>
          </div>
      );
  }
}