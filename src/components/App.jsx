import "../styles/App.scss";
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
    return product.name.official.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <header className="header">
        <h1 className="title">Aplicación de información de países</h1>
        <h2 className="second-title">Explora información de países, capitales y banderas</h2>
      </header>
      <main>
        <Filters onChangeFilter={changeFilterValue} />
        <ListCountries countries={filteredProducts} />
      </main>
    </>
  );
}

export default App;
