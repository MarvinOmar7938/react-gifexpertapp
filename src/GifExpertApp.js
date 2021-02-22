import { useState } from "react";
import React from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch','Samurai X','Dragon Ball']);

    // const handleAdd = () => {
    //     // para que sea el primero
    //     // setcategories(['HunterXHunter',...categories]);

    //     setcategories(cats=>[...cats,'HunterXHunter']);
    // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
          {
              categories.map( category =>{
                  return <li key={ category }>{ category }</li>
              })
          }
      </ol>
    </>
  );
};
