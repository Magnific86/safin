import React from "react";

const someArr = new Array(12)
  .fill("Lorem ips")
  .map((el, index) => <p key={index}>{el}</p>);

const allArr = new Array(6).fill(someArr).map((el) => (
  <div className="eachColHover">
    <h1>Lorem</h1>
    {el}
  </div>
));

export const MenuHover = () => {
  return <div className="menuHover">{allArr}</div>;
};
