import "leaflet/dist/leaflet.css"
import type { Place } from "../api/Place";
import { Icon, type Map as LeafletMap} from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface MapProps {
    place: Place | null,
}

export default function Maps({ place }: MapProps) {
    const mapRef = useRef<LeafletMap | null>(null);

    const customIcon = new Icon(
        {
            iconUrl: "https://cdn-icons-png.flaticon.com/128/1483/1483336.png",
            iconSize: [40, 40]
        }
    );

    useEffect(() => {
        if (mapRef.current && place) {
            mapRef.current.flyTo([place.latitude, place.longitude]);
        }
    }, [place])

    return( 
        <MapContainer
            ref={mapRef}
            center={[-6.175247, 106.8270488]}
            zoom={12}
            scrollWheelZoom
            className='h-full'
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {place && <Marker position={[place.latitude, place.longitude]} icon={customIcon}/>}
        </MapContainer>
    );
}