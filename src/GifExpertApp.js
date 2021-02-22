import { useState } from "react";
import React from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setcategories }/>
      <hr />

      <ol>
          {
              categories.map( category =>(
                <GifGrid
                  key = { category }
                  category = { category }
                />
              ))
          }
      </ol>
    </>
  );
};
