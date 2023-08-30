"use client";

import { useState } from "react";
import { SearchManufacture } from "./";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");

  return (
    <>
      <form className="searchbar">
        <div className="searchbar__item">
          <SearchManufacture
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
      </form>
    </>
  );
}
