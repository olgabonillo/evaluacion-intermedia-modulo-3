import { useState } from "react";

function Filters() {
  const [formulario, setFormulario] = useState({
    continenteSeleccionado: "",
  });

  
  const continentes = [
    "África",
    "Antártida",
    "Asia",
    "Europa",
    "Norteamérica",
    "Oceanía",
    "Sudamérica",
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formulario.continenteSeleccionado === "") {
      alert("Por favor selecciona un continente.");
      return;
    }
    alert(
      `Continente Seleccionado: ${formulario.continenteSeleccionado}`
    );
  };

  return (
    <div className="filters">
      <h2>Filtros</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Escribe un país:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
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
