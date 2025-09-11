"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

export default function CardMap() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY || ""}>
      <div className="w-full h-[270px]">
        <Map zoom={9} center={position} mapId="e4ce84c3f2e1437a">
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin background={"red"} borderColor={"red"} glyphColor={"red"} />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
