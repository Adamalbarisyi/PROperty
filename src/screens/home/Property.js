import React, { Component } from "react";
import PropertyPilihan from './Content/PropertyPilihan'
import Pilihan from '../../assets/icon_content/Group 417.png';
class Property extends Component {
  render() {
    return (
      <div>
        <h2><img style={{width:45,height:45, marginRight:10, marginLeft:20}} src={Pilihan}  rounded alt="logo"/> Property Pilihan</h2>

    <PropertyPilihan/>
      </div>

    );
  }
}
 
export default Property;