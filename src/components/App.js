import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import SideNav from './SideNav';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const getAddress = url => {
  const address = null;
  fetch(url)
    .then(r => r.json())
    .then(data => {
      address = data;
      return data;
    });
  return address;
}

const App = () => {
  const [isDefaultLatTrue, handleDefaultStateLat] = React.useState(true);
  const [isDefaultLngTrue, handleDefaultStateLng] = React.useState(true);
  const [isLatValid, setLatValidity] = React.useState(true);
  const [isLngValid, setLngValidity] = React.useState(true);
  const [lat, setLat] = React.useState(33);
  const [lng, setLng] = React.useState(-77);

  const regex = /^(\-?\d+(\.\d+)?)$/;

  const isValidCoordinates = coord => (
    regex.test(coord)
  )

  const setLattitude = event => {
    isValidCoordinates(event.target.value) ? 
      setLat(parseFloat(event.target.value)) :
      setLat(event.target.value);
    handleDefaultStateLat(false);
    setLatValidity(isValidCoordinates(event.target.value));
  };

  const setLongitude = event => {
    isValidCoordinates(event.target.value) ? 
      setLng(parseFloat(event.target.value)) :
      setLng(event.target.value);
    handleDefaultStateLng(false);
    setLngValidity(isValidCoordinates(event.target.value));
  };

  return (
    <Wrapper>
      <Map
        lat={lat}
        lng={lng}
      />
      <SideNav
        lat={lat}
        lng={lng}
        isLatValid={isLatValid}
        isLngValid={isLngValid}
        setLat={setLattitude}
        setLng={setLongitude}
        isDefaultLatTrue={isDefaultLatTrue}
        isDefaultLngTrue={isDefaultLngTrue}
      />
    </Wrapper>
  );
}

export default App;
