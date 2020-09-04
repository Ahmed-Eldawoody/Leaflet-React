import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";

export default class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const pointerIcon = new L.Icon({
      iconUrl: "./icon-location.svg",
      iconAnchor: [5, 60],
      popupAnchor: [0, 0],
      // iconSize: [25, 55],
      shadowSize: [68, 95],
      shadowAnchor: [20, 92]
    });

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon} center={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
