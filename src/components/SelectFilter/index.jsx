import React from "react";
import { Select } from "react-materialize";

import "./index.scss";

const SelectFilter = (props) => {
  const arr = props.options;

  return (
    <Select
      id="Select-9"
      multiple={false}
      onChange={props.onChange}
      options={{
        classes: "dark",
        dropdownOptions: {
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        },
      }}
    >
      {arr.map((item) => (
        <option
          key={item.name ? item.name : item}
          value={item.id ? item.id : item}
        >
          {item.name ? item.name : item}
        </option>
      ))}
    </Select>
  );
};
export default SelectFilter;
