import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';

export const MapPage = () => {
  const initialPosition = { lat: 40.409264, lng: 49.867092 };
  const bduPosition = { lat: 40.372778, lng: 49.811389 };
  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={bduPosition}>
        <Popup>Baku State University</Popup>
      </Marker>
    </MapContainer>
  );
};
