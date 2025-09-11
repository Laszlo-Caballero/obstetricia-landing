"use client";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

export default function CardMap() {
  //-8.105179120912057, -79.03624806377229
  const position = { lat: -8.105179120912057, lng: -79.03624806377229 };
  const [open, setOpen] = useState(false);
  const [camara, setCamara] = useState({
    center: { lat: -8.105179120912057, lng: -79.03624806377229 },
    zoom: 15,
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setCamara({
  //       center: {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       },
  //       zoom: 15,
  //     });
  //   });
  // }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY || ""}>
      <div className="w-full h-[270px]">
        <Map
          zoom={camara.zoom}
          center={camara.center}
          onCameraChanged={(e) => {
            setCamara(e.detail);
          }}
          mapId="e4ce84c3f2e1437a"
        >
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin background={"red"} borderColor={"red"} glyphColor={"red"} />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
