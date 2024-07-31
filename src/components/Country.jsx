import ListCountries from "./ListCountries";
function Country({ countryInfo }) {
    return (
      <li className="product">
        <div className="product__image">{countryInfo.flag}</div>
        <h3>{countryInfo.name.official}</h3>
        <p>{countryInfo.continents[0]}</p>
        <p>{countryInfo.capital[0]}</p>
      </li>
    );
  }

export default Country;