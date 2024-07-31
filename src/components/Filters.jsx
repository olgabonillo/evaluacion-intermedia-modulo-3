function Filters(props) {
    const handleChangeInput = (ev) => {
      props.onChangeFilters(ev.target.value);
    };
  
    return (
      <form>
        <label htmlFor="nameFilter">País:</label>
        <input type="text" id="nameFilter" onChange={handleChangeInput} />
        <label htmlFor="titleFilter">Continente:</label>
        <input type="text" id="titleFilter" onChange={handleChangeInput} />
      </form>
    );
  }
  
  export default Filters;