import ListCountries from "./ListCountries";
function Country({ countryInfo }) {
    return (
      <li className="product">
        <div className="product__image">{countryInfo.flag}</div>
        <h3>{countryInfo.name.official}</h3>
        <p>{countryInfo.continents}</p>
      </li>
    );
  }

export default Country;