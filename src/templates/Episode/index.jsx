import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import SelectFilter from "../../components/SelectFilter";

const Episode = () => {
  const [currentId, setId] = useState(1);

  const [episodes, setEpisodes] = useState([]);

  const [episodeName, setEpisodeName] = useState();

  const [episodeDate, setEpisodeDate] = useState("");

  const [characters, setCharacters] = useState([]);

  const changeEpisode = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    (async () => {
      //For fill select box
      let episodes = await fetch(
        `https://rickandmortyapi.com/api/episode/`
      ).then((response) => response.json());
      setEpisodes(episodes.results);

      let data = await fetch(
        `https://rickandmortyapi.com/api/episode/${currentId}`
      ).then((response) => response.json());
      setEpisodeDate(data.air_date);
      setEpisodeName(data.name);
      let items = await Promise.all(
        data.characters.map((item) => {
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
          Episode: <b>{episodeName}</b>
        </h3>
        <span>{episodeDate}</span>
      </div>
      <div className="Grid__wrapper">
        <div className="Grid__select">
          <SelectFilter options={episodes} onChange={changeEpisode} />
        </div>
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

export default Episode;
