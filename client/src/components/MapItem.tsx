import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'



export default function MapItem({ currPosition, data, getPopUp }: any) {
  return (
    <MapContainer center={currPosition} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map(({ coordinateX, coordinateY, urlPhoto, name, surname, team }: any) => <Marker position={[+coordinateX, +coordinateY]}  >{getPopUp({ urlPhoto: urlPhoto, name: name, surname: surname, team: team })}</Marker>)}
    </MapContainer>
  );
}
