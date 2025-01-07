import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defaultPosition: [number, number] = [41.7151, 44.8271];

const MapComponent = () => {
  return (
    <div className="h-[400px] w-[100%]">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={defaultPosition}>
          <Popup>
            Tbilisi, Georgia <br /> A beautiful location!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
