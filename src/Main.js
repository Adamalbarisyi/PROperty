import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import {Container, Row} from 'react-bootstrap';
import ScrollToTop from 'react-router-scroll-top'   
import Header from './components/Header'
import Kategori from "./screens/home/Kategori";
import Trending from "./screens/home/Trending";
import Property from "./screens/home/Property";
import Footer from "./components/Footer";
import ListIklan from './screens/home/iklan/ListIklan';
import DetailIklan from './screens/home/iklan/DetailIklan';
 
class Main extends Component {
  render() {
    return (

    <HashRouter>
    <div>
    <ScrollToTop/>
        <div className="header" >
            <Header/>
        </div>

        <div className="main-content" style={{marginTop:20}}>
            <Container>
                <Row>
                    <Route exact path="/" component={Kategori}/>
                    <Route exact path="/" component={Trending}/>
                    <Route onUpdate={() => window.scrollTo(0, 0)}  exact path="/ListIklan" component={ListIklan}/>
                     <Route exact path="/DetailIklan" component={DetailIklan}/>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/" component={Property}/>
                    
                </Row>

            </Container>
        </div>

        <div className="footer" >
            <Footer/>
        </div>
    </div>
</HashRouter>
    );
  }
}
 
export default Main;
