import { useState } from "react";
import type { Place } from "./api/Place";
import LocationSearch from "./components/LocationSearch";
import Maps from "./components/Maps";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="absolute z-50 m-3 p-3 bg-white rounded-lg w-96">
        <LocationSearch onPlaceClick={(p) => setPlace(p)}/>
      </div>
      <div className="col-span-12 z-0">
        <Maps place={place}/>
      </div>
    </div>
  );
}

export default App
