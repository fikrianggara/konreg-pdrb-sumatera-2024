import { IconMapPinFilled } from "@tabler/icons-react";
import { useState } from "react";
import MapboxMap, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiZmlrcmlhbmdnYXJhIiwiYSI6ImNscmsyYnZveTA5NmUya29qZ2djYmU5YnkifQ.vVYOAwSJaUdd5gFA0TnxZA";

function Map() {
  const [viewPort, setViewPort] = useState({
    longitude: 103.6021418,
    latitude: -1.6015007,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState<any>(null);

  return (
    <div className="w-full h-full rounded-lg pb-8">
      <MapboxMap
        mapboxAccessToken={TOKEN}
        initialViewState={viewPort}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        interactive={true}
        onMove={(evt) => setViewPort(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
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
            <div>lokasi</div>
            {/* <img width="100%" src={popupInfo.image} /> */}
          </Popup>
        )}
      </MapboxMap>
    </div>
  );
}

export default Map;
