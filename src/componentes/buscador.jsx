export function Buscador({ valor, onCambiar }) {
    return (
      <input 
        className="input-buscador"
        type="text"
        placeholder="Buscar canción..."
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      />
    );
  }
  
  export default Buscador;