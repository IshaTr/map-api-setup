import React  from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

const ContainerElement = styled.div`
    height: 789px;
    width: 100%;

    @media(max-width: 480px) {
        width: 78%;
        height: 300px;
    }
`;

const Map = ({ lat, lng }) => {
    const MyMapComponent = compose(withScriptjs, withGoogleMap)(props => {
        return (
            <GoogleMap
                defaultCenter = { { lat: props.lat, lng: props.lng } }
                defaultZoom = {13}
            >        
                <Marker position={{ lat: props.lat, lng: props.lng }}>
                    <InfoWindow>
                        <div>
                            coordinates {props.lat},{props.lng}
                        </div>
                    </InfoWindow>
                </Marker>      
            </GoogleMap>
        );
    });

    return (
        <MyMapComponent
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAzcrF58HyN3PONl3vAEBCZnWibIgewoDI&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={ <ContainerElement />}
            mapElement={ <div style={{ height: '100%'}} /> }
            lat={lat}
            lng={lng}
        />
    )
}

export default Map;