import { Link } from "react-router-dom";

function Ring({ ring }) {
  return (
    <div className="column">
      <Link to={`/rings/${ring.id}`} className="card-link">
        <div className="card">
          <img className="list-image" src={ring.image} alt={ring.name} />
          <h4>
            <b className="product-name">{ring.name}</b>
          </h4>
          <button className="addToCart-btn-list">
            <span>{ring.price}</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Ring;