export function ListaCanciones({ canciones, onPlay, onEliminar }) {
  return (
    <ul>
      {canciones.map((cancion, index) => (
        <li key={index}>
          <span>{cancion.nombre}</span>
          <span>Reproducciones: {cancion.reproducciones}</span>
          <div className="acciones">
            <button onClick={() => onPlay(cancion.url)} className="btn">Play‧₊˚🎧‧₊˚</button>
            <button onClick={() => onEliminar(cancion.url)} className="btn">Eliminar 🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaCanciones;