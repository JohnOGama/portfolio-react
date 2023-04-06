import React from "react";

function IconTech(props) {
  return (
    <div className="hover:scale-[1.2] duration-500">
      <img src={props.icon} width={props.width} className="mx-auto" />
      <p className="mt-2">{props.title}</p>
    </div>
  );
}

export default IconTech;
