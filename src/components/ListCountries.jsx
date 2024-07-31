import Country from "./Country";

function ListCountries(props) {
  return (
    <section>
      <ul className="product-list">
        {props.countries.map((country, index) => {
          return <Country key={index} countryInfo={country} />;
        })}
      </ul>
    </section>
  )
}

export default ListCountries;