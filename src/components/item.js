import React from "react";

const Item = (props) => {
  return (
    <div>
      <img src={props.url} alt="" className="w-full" />
      <h2>{props.views}</h2>
      <p>{props.downloads}</p>
    </div>
  );
};

export default Item;
