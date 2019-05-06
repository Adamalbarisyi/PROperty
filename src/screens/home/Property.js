import React, { Component } from "react";
import PropertyPilihan from './Content/PropertyPilihan'
import Pilihan from '../../assets/icon_content/Group 417.png';
class Property extends Component {
  render() {
    return (
      <div style={{marginLeft:-20, marginRight:-20}}>
        <h3><img style={{width:45,height:45, marginRight:10, marginLeft:20}} src={Pilihan}  alt="logo"/> Property Pilihan</h3>

    <PropertyPilihan/>
      </div>

    );
  }
}
 
export default Property;