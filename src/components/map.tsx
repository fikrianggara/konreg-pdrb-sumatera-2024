import { useWindowSize } from "@/hooks/useWindowSize";
import { IconMapPinFilled } from "@tabler/icons-react";
import mapboxgl from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import MapboxMap, {
  FullscreenControl,
  MapRef,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiZmlrcmlhbmdnYXJhIiwiYSI6ImNscmsyYnZveTA5NmUya29qZ2djYmU5YnkifQ.vVYOAwSJaUdd5gFA0TnxZA";

const STYLE_URL = "mapbox://styles/fikrianggara/clrp5me4p009b01qy68ss74ks";
const INITIAL_VIEW_PORT = {
  longitude: 97.802708,
  latitude: 0.928,
  zoom: 3.4,
  bearing: 0,
  pitch: 7.5,
};
const MOBILE_VIEW_PORT = {
  longitude: 98.612352,
  latitude: 3.577446,
  zoom: 5,
  pitch: 20,
  bearing: -20,
};
const VIEW_PORT = {
  longitude: 95.802708,
  latitude: -0.928,
  zoom: 5.4,
  bearing: 0,
  pitch: 40.0,
};
export function Map3D() {
  const [popupInfo, setPopupInfo] = useState<any>(null);

  const { width } = useWindowSize();

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (width && width < 800) {
      setTimeout(() => {
        mapRef.current?.flyTo({
          ...MOBILE_VIEW_PORT,
          center: [MOBILE_VIEW_PORT.longitude, MOBILE_VIEW_PORT.latitude],
          duration: 5000,
        });
      }, 1000);
    } else {
      setTimeout(() => {
        mapRef.current?.flyTo({
          ...VIEW_PORT,
          center: [VIEW_PORT.longitude, VIEW_PORT.latitude],
          duration: 5000,
        });
      }, 1000);
    }
  }, [width]);
  return (
    <div className="w-full h-fit rounded-xl flex items-center justify-center h-screen">
      <MapboxMap
        mapboxAccessToken={TOKEN}
        initialViewState={INITIAL_VIEW_PORT}
        ref={mapRef}
        mapStyle={STYLE_URL}
        // interactive={true}
        // onMove={(evt) => setViewPort(evt.viewState)}
        // trackResize
        // style={{ width: "100%", height: "100%" }}
      ></MapboxMap>
    </div>
  );
}

export function RecenteringMap() {
  const mapContainerRef = useRef<any>(null);

  // const [markerLngLat, setMarkerLngLat] = useState([85.324, 27.7172]);
  const [mapObject, setMap] = useState<any>();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/fikrianggara/clrp5me4p009b01qy68ss74ks",
      center: [95.802708, -1.928],
      accessToken: TOKEN,
      zoom: 13,
    });

    setMap(map);
  }, []);

  function setMapCenter(coords: number[]) {
    if (mapObject) {
      mapObject.setCenter(coords);
    }
  }

  return (
    <div className="w-full h-fit rounded-xl flex items-center justify-center h-screen">
      <a onClick={() => setMapCenter([65.468754, 44.57875])} className="p-4" />
      <div className="listing-map-container h-96" ref={mapContainerRef}></div>
    </div>
  );
}

function Map() {
  const [viewPort, setViewPort] = useState({
    longitude: 103.6021418,
    latitude: -1.6015007,
    zoom: 15,
    bearing: 0,
    pitch: 50,
  });
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const mapRef = useRef<MapRef>();

  return (
    <div className="w-full h-full rounded-lg pb-8">
      <MapboxMap
        // ref={mapRef}
        mapboxAccessToken={TOKEN}
        initialViewState={viewPort}
        // initialViewState={INITIAL_VIEW_STATE}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        interactive={true}
        onMove={(evt) => setViewPort(evt.viewState)}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        <Marker
          latitude={-1.6015007}
          longitude={103.6021418}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo("popup");
          }}
        >
          <IconMapPinFilled className="text-red-700" size={48} />
        </Marker>
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={103.6021418}
            latitude={-1.6015007}
            onClose={() => setPopupInfo(null)}
          >
            <div className="p-4 bg-green-500">lokasi</div>
            {/* <img width="100%" src={popupInfo.image} /> */}
          </Popup>
        )}
      </MapboxMap>
    </div>
  );
}

export default Map;
