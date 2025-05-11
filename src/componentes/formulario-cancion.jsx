import { useState } from "react";

export function FormularioCancion({ canciones, onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const validarURL = (url) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !url) return setError("Todos los campos son obligatorios.");
    if (!validarURL(url)) return setError("URL inválida. Debe ser de YouTube.");
    if (canciones.some((c) => c.url === url)) return setError("Esta canción ya está agregada.");

    onAgregar({ nombre, url, reproducciones: 0 });
    setNombre("");
    setUrl("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la canción"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de YouTube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit" className="btn">Agregar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default FormularioCancion;
