function Loader({ text = "Cargando..." }) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{text}</p>
    </div>
  );
}

export default Loader;