import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "./map.css";
import "/node_modules/leaflet/dist/leaflet.css";
// import markericon from "../assets/img/m"

const Map = () => {
    const Markers = [
        { position: [51.505, -0.09], name: "London" },
        { position: [49.45633456796588, 11.074293822089249], name: "Nürnberg" },
        { position: [39.91629048726271, 32.90255928525673], name: "Turkey" },
        {
            position: [12.555436798132744, 77.62490356095117],
            name: "South India",
        },
    ];

    return (
        <div>
            <MapContainer
                center={[39.91629048726271, 32.90255928525673]}
                zoom={3}
                scrollWheelZoom={false}
                style={{
                    width: "100%",
                    height: "calc(100vh - 30rem)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
                {/* <Marker position={[44.95588737034399, -93.09477631782119]}>
          <Popup>Regions Hospital Burn Center</Popup>
        </Marker> */}
            </MapContainer>
        </div>
    );
};

export default Map;

// import 'leaflet/dist/leaflet.css';

// const Map = () => {
// const position = [51.505, -0.09]

// return(
//   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// )
// };

// export default Map;
