import React, { useState, useEffect } from "react";

import { Pagination, Icon } from "react-materialize";

import Card from "../../components/Card";

const Character = () => {
  const [items, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState();

  const changePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setPages(data.info.pages);
        setItem(data.results);
      });
  }, [currentPage]);

  return (
    <>
      <div className="Grid__heading">
        <h3>
          <b>Characters</b>
        </h3>
      </div>
      <div className="Grid__wrapper">
        <div className="Grid__layout --character">
          {items.map((item) => (
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
      <div className="Grid__pagination">
        <Pagination
          onSelect={changePage}
          activePage={currentPage}
          items={pages}
          leftBtn={<Icon>chevron_left</Icon>}
          maxButtons={10}
          rightBtn={<Icon>chevron_right</Icon>}
        />
      </div>
    </>
  );
};

export default Character;
