import React from "react";
import WhiskyList from "../components/Whisky/WhiskyList";
import WhiskyFilters from "./WhiskyFilters";

export default function WhiskyBox() {
  return (
    <main>
      <WhiskyFilters />
      <WhiskyList />
    </main>
  );
}
