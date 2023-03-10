import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import SelectFilter from "../../components/SelectFilter";

const Location = () => {
  const [currentId, setId] = useState(1);
  const [locations, setLocations] = useState([]);
  const [locationName, setLocationName] = useState();
  const [locationType, setLocationType] = useState();
  const [characters, setCharacters] = useState([]);

  const changeLocation = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    (async () => {
      //For fill select box
      let locations = await fetch(
        `https://rickandmortyapi.com/api/location/`
      ).then((response) => response.json());
      setLocations(locations.results);

      let data = await fetch(
        `https://rickandmortyapi.com/api/location/${currentId}`
      ).then((response) => response.json());
      setLocationName(data.name);
      setLocationType(data.type);

      let items = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((response) => response.json());
        })
      );
      setCharacters(items);
    })();
  }, [currentId]);

  return (
    <>
      <div className="Grid__heading">
        <h3>
          Location: <b>{locationName}</b>
        </h3>
        <span>{locationType}</span>
      </div>
      <div className="Grid__wrapper">
        {
          <div className="Grid__select">
            <SelectFilter options={locations} onChange={changeLocation} />
          </div>
        }
        <div className="Grid__layout">
          {characters.map((item) => (
            <Card
              key={item.id}
              status={item.status}
              name={item.name}
              species={item.species}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
