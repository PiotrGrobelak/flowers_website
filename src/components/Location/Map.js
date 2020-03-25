import React from 'react';
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


const StyledContainer = styled.div`
height: 400px;
width: 100%;
`;


const Location = () => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 50.075214, lng: 19.993444 }}
        />
    )
}


const HOCContainer = withScriptjs(withGoogleMap(Location));
const MapContainer = () => {

    return (
        <StyledContainer>
            <HOCContainer
                googleMapURL={`
                https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.API_GOOGLE_MAPS
                    }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </StyledContainer>

    )
}


export default MapContainer;


