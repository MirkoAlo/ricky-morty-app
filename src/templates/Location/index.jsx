import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import SelectFilter from "../../components/SelectFilter";

const Location = () => {
  const [currentId, setId] = useState(1);
  const [locations, setLocations] = useState([]);
  const [locationName, setLocationName] = useState("Earth (C-137)");
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
      <div className="Grid__title">
        <h3>
          Location: <b>{locationName}</b>
        </h3>
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
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
