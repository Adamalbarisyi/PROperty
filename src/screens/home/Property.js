import React, { Component } from "react";
import AsyncFetch from '../../api/AsyncFetch'
import Slider from "react-slick";
import millify from 'millify';
import { Card, Button,  Badge } from 'react-bootstrap';
import {Container, Col} from 'react-bootstrap';
import Pilihan from '../../assets/icon_content/Group 417.png';



class Property extends Component {


  state = {
      data: [],
      url: "http://apiproday.herokuapp.com/api/v1/Pilihan_advert"
  }

  setStateAsync(state) {
      return new Promise(resolve => {
          this.setState(state, resolve)
      })
  }

  async componentWillMount() {
      console.log("Component A Will Mount")
      const url = this.state.url
      console.log(url)
      console.log("SetState with AsyncFetch")
      await this.setStateAsync({
          isLoad: true,
          ...await AsyncFetch(url)
      })
  }
  ambilangka(value) {
      return millify(value, {
          precision: 2,
          decimalSeparator: ',',
          units: ['', 'Ribu', 'Juta', 'Milyar', 'Triliun'],
          space: true,
      })
  }
  nego(value) {
      if (value === 'true') {
          return "Nego"
      } else {
          return ""
      }
  }

  render() {

    let children = []
           if (this.state.isLoad) {
               children = this.state.data
               console.log(children)
           }
           var settings = {
               dots: true,
               infinite: true,
               speed: 300,
               slidesToShow: 4,
               slidesToScroll: 4,
               autoplay: true,
               autoplaySpeed: 3000,
               arrows: true,
               responsive: [{
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: true
                   }
               }, {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                   }
               }, {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }]
           };

    return (
         <Col xs={12} md={12}>
            <div className="content">
              <div style={{marginLeft:-20, marginRight:-20}}>
                <h3><img style={{width:45,height:45, marginRight:10, marginLeft:20}} src={Pilihan}  alt="logo"/> Property Pilihan</h3>

          <Container>
    <div style={{paddingBottom:30}}>
        { ! this.state.isLoad && <label>Loading ... </label> }
        <Slider {...settings}>
            { this.state.isLoad && children.map((value, index) =>

            <React.Fragment key={value.id}>
              <center>
                <Card style={{ width: '16rem',margin:10}}>
                    
                        <Card.Img  variant="top" src={value.foto} onError={(e) => {
                        e.target.src = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' // some replacement image
                         }} />
                 
                    <Card.Body>
                        <Badge variant="secondary">{value.kategori}</Badge>
                        <Card.Title style={{fontWeight:540}}>{(value.title.substring(0,60))}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{value.alamat}</Card.Subtitle>
                        <Card.Title style={{color: '#3D87F3',marginTop:25, marginBottom:25, fontWeight:500, float: 'left'}}>
                        Rp {this.ambilangka(value.harga)}
                            <h2 style={{fontSize:15, color: '#95a5a6', float: 'right', marginLeft:10}}> {this.nego(value.nego)}</h2>
                        </Card.Title>
                       <a href="#/ListIklan">
                        <Button  variant="outline-warning" style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center'}}>
                        Hubungi Penjual</Button>
                        </a>
                        
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
  </Col>

    );
  }
}
 
export default Property;
