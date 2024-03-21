import type { Place } from "../api/Place";
import {  useState } from "react";
import { search } from "../api/Search";
import { GoSearch } from "react-icons/go";

interface locationSeacrhProp {
    onPlaceClick: (place: Place) => void,
}

export default function LocationSearch({ onPlaceClick }: locationSeacrhProp) {
    const [places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState('');

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const result = await search(term);
        setPlaces(result);
    }

    const renderedListPlace = places.map(place => {
        return(
            <div 
                key={place.id} 
                className="cursor-pointer py-4 px-1 hover:bg-gray-100" 
                onClick={() => onPlaceClick(place)}
            >
                <p className="text-m">{place.name}</p>
                <div className="border-b w-full mt-2" />
            </div>
        );
    });

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex border rounded-md items-center py-2 pl-3">
                    <input 
                        className="basis-4/5 focus:outline-none"
                        id="term"
                        value={term}
                        placeholder="Search Place...."
                        onChange={e => setTerm(e.target.value)}/>
                    <GoSearch className="basis-1/5"/>
                </div>
            </form>

            <h1 className="font-bold mt-6">Found Location</h1>
            <div className="flex flex-col mt-2">
                {
                    renderedListPlace
                }
            </div>
        </div>
    );
}