import { Link } from "react-router-dom";

function Watch({ watch }) {
  return (
      <div className="column">
      <Link to={`/watches/${watch.id}`} className="card-link">
        <div className="card">
          <img className="list-image" src={watch.image} alt={watch.name} />
          <h4>
            <b className="product-name">{watch.name}</b>
          </h4>
          <button className="addToCart-btn-list">
            <span>{watch.price}</span>
          </button>
        </div>
        </Link>
      </div>
  );
}

export default Watch;
