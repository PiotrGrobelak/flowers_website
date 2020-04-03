import React, { useState } from 'react';
import styled from 'styled-components';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const informationData = {
  name: `Piotr Grobelak`,
  contact: `535638729`,
};

const StyledContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 99%;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
  }
`;

const StyledInformationWrapper = styled.div`
  padding: 0.1rem;
  p {
    margin: 0;
    padding: 0.2rem;
  }
`;

const Location = withScriptjs(
  withGoogleMap(() => {
    const [information, setInformation] = useState(false);

    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 50.075214, lng: 19.993444 }}
        clickableIcons={false}
      >
        <Marker
          position={{ lat: 50.075214, lng: 19.993444 }}
          onClick={() => setInformation(true)}
          onCursorChanged={() => setInformation(false)}
          onFlatChanged={() => setInformation(false)}
          onIconChanged={() => setInformation(false)}
        >
          {information && (
            <InfoWindow onCloseClick={() => setInformation(false)}>
              <StyledInformationWrapper>
                <p>{informationData.name}</p>
                <p>{informationData.contact}</p>
              </StyledInformationWrapper>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    );
  }),
);

const MapContainer = () => {
  return (
    <StyledContainer>
      <Location
        googleMapURL={`
                https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_API_GOOGLE_MAPS}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </StyledContainer>
  );
};

export default MapContainer;
