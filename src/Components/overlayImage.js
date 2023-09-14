const OverlayImage = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="overlay">
      <img src={imageUrl} alt={alt} />
      <button className="close-btn" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default OverlayImage;
