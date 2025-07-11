
import './StaticCard.css';

function StaticCard() {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/seed/react-card/300/180"
        alt="A random placeholder image for the card"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Static Card Title</h2>
        <p className="card-text">
          This is a short paragraph describing the content of the static card.
          It provides a brief summary.
        </p>
      </div>
    </div>
  );
}

export default StaticCard;