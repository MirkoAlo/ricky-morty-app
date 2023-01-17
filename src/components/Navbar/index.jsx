import React from "react";

import SelectFilter from "../SelectFilter";

const Header = (props) => {
  const changeFilter = (e) => {
    props.func(e.target.value);
  };
  const values = ["character", "location", "episode"];

  return (
    <div className="SelectFilter">
      <SelectFilter options={values} onChange={changeFilter} />
    </div>
  );
};

export default Header;
