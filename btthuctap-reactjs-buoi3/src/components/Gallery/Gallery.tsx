import ImageItem from '../ImageItem/ImageItem';
import Title from '../Title/Title';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery-section">
      <Title/>
      <div className="gallery-grid">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </div>
    </section>
  );
}

export default Gallery;