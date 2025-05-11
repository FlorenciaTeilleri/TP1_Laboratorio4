import { useState, useEffect } from "react";
import FormularioCancion from "./componentes/formulario-cancion";
import ListaCanciones from "./componentes/lista-canciones";
import Buscador from "./componentes/buscador";
import ModalVideo from "./componentes/modal-video";

export default function App() {

  const [canciones, setCanciones] = useState(() => {
    const cancionesGuardadas = localStorage.getItem("canciones");
    return cancionesGuardadas ? JSON.parse(cancionesGuardadas) : [];
  });

  const [busqueda, setBusqueda] = useState("");
  const [ordenar, setOrdenar] = useState(false);
  const [videoActivo, setVideoActivo] = useState(null);

  useEffect(() => {
    localStorage.setItem("canciones", JSON.stringify(canciones));
  }, [canciones]);

  const agregarCancion = (nueva) => {
    setCanciones([...canciones, nueva]);
  };

  const eliminarCancion = (url) => {
    const actualizadas = canciones.filter((c) => c.url !== url);
    setCanciones(actualizadas);
  };

  const incrementarReproduccion = (url) => {
    const actualizadas = canciones.map((c) =>
      c.url === url ? { ...c, reproducciones: c.reproducciones + 1 } : c
    );
    setCanciones(actualizadas);
    setVideoActivo(url);
  };

  const cancionesFiltradas = canciones
    .filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase().trim()))
    .sort((a, b) => (ordenar ? b.reproducciones - a.reproducciones : 0));

  return (
    <div className="contenedor-principal">
  <h1>REPRODUCTOR DE CANCIONES</h1>

  <FormularioCancion canciones={canciones} onAgregar={agregarCancion} />

  <div className="buscador-wrapper">
    <Buscador valor={busqueda} onCambiar={setBusqueda} />
    <button onClick={() => setOrdenar(!ordenar)} className="btn">
      {ordenar ? "Desordenar" : "Ordenar por Reproducciones"}
    </button>
  </div>

  <ListaCanciones
    canciones={cancionesFiltradas}
    onPlay={incrementarReproduccion}
    onEliminar={eliminarCancion}
  />

  {videoActivo && (
    <ModalVideo url={videoActivo} onCerrar={() => setVideoActivo(null)} />
  )}
  </div>
  );
}
