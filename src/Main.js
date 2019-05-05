import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';


import Search from './screens/home/Content/Search'

import Kategori from "./screens/home/Kategori";
import Trending from "./screens/home/Trending";
import Property from "./screens/home/Property";
 
class Main extends Component {
  

  render() {
    return (
    <HashRouter>
    <div>
        <div className="header" >
         <Search/>
        </div>

        <div className="main-content" style={{marginTop:20}}>

            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <div className="content">
                        <Route exact path="/" component={Kategori}/>
                    </div>
                    </Col>

                    <Col xs={12} md={4}>
                    <div className="content">
                        <Route exact path="/" component={Trending}/>
                    </div>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col xs={12} md={12}>
                    <div className="content">
                        <Route exact path="/" component={Property}/>
                    </div>
                    </Col>
                </Row>

            </Container>
        </div>



    </div>
</HashRouter>
    );
  }
}
 
export default Main;