import { useState } from "react";

function Filters(props) {
  const [formulario, setFormulario] = useState({
    continenteSeleccionado: "",
  });
  console.log(formulario);
  const continentes = [
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
      <h2>Filtros</h2>
      <form>
        <div>
          <label htmlFor="name">Escribe un país:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formulario.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="continenteSeleccionado">
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
