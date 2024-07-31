import { useState } from "react";

function Filters(props) {
  const [formulario, setFormulario] = useState({
    continenteSeleccionado: "",
  });
  console.log(formulario);
  const continentes = [
    "Todos los países",
    "África",
    "Antártida",
    "Asia",
    "Europa",
    "Norteamérica",
    "Oceanía",
    "Sudamérica",
  ];
  console.log(props);
  const handleInputChange = (event) => {
    props.onChangeFilter(event.target.value);
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };


  return (
    <div className="filters">
      <h2 className="label">Filtros</h2>
      <form>
        <div>
          <label htmlFor="filterCountry" className="label">Escribe un país:</label>
          <input
            type="text"
            id="filterCountry"
            name="name"
            placeholder="Escribe aquí el país"
            value={formulario.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="continenteSeleccionado" className="label">
            Selecciona un continente:
          </label>
          <select
            id="continenteSeleccionado"
            name="continenteSeleccionado"
            value={formulario.continenteSeleccionado}
            onChange={handleInputChange}
            required
          >
            <option value="">-Selecciona un continente-</option>
            {continentes.map((continente, name) => (
              <option key={name} value={continente}>
                {continente}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
