import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  LatLng,
} from "use-places-autocomplete";
import * as S from "./Map.styles";

const key = "AIzaSyAtW3GoGl8D39on7Z-JfJqUamIFJPleopw";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -14.235004,
  lng: -51.925282,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function SimpleMap() {
  //adicionando a key do meu projeto do google e tambem a permissão do use-places-autocomplete
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: ["places"],
  });

  if (loadError) return <p>Error loading maps</p>
  if (!isLoaded) return <p>Loading Maps</p>

  return (
    <S.Container>
      <h1>MAPA</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={options}
      ></GoogleMap>
    </S.Container>
  );
}
