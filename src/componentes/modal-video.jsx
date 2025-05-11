export function ModalVideo({ url, onCerrar }) {
  const getId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return match ? match[1] : null;
  };
  const videoId = getId(url);

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onCerrar}>&times;</button>
        {videoId && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Reproductor de Video"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default ModalVideo;
