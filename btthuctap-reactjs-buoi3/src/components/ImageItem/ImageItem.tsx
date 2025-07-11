import './ImageItem.css';


function ImageItem() {
  return (
    <div className="image-item">
      <img
        src="https://picsum.photos/seed/gallery1/400/300"
        alt="A gallery item"
        className="gallery-image"
      />
    </div>
  );
}

export default ImageItem;