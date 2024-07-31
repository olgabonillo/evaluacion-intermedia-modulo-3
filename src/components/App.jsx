import "./App.css";
import ListCountries from "./ListCountries";
import listData from "../services/Data.json";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");

  const changeFilterValue = (valueInput) => {
    setFilterValue(valueInput);
  };

  const filteredProducts = listData.filter((product) => {
    return product.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <header>
        <h1 className="title">Aplicación de información de países</h1>
        <h2>Explora información de países, capitales y banderas</h2>
      </header>
      <main>
        <Filters onChangeFilter={changeFilterValue} />
        <ListCountries products={filteredProducts} />
      </main>
    </>
  );
}

export default App;
