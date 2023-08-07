import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '950px',
        };

        // Replace the coordinates with your location
        const myLocation = { lat: 47.9186, lng: 106.9415 };
        return (
            // 
            <Map
                google={this.props.google}
                style={mapStyles}
                initialCenter={myLocation}
                zoom={15}
                onClick={this.onMapClicked}
            ></Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyC1yb1WcIjG8Ppaici-DIbhc6SIJSXCCzg")
})(MapContainer)
