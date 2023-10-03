import { Link } from "react-router-dom";

function Necklace({ necklace }) {
  return (
      <div className="column">
      <Link to={`/necklaces/${necklace.id}`} className="card-link">
        <div className="card">
          <img className="list-image" src={necklace.image} alt={necklace.name} />
          <h4>
            <b className="product-name">{necklace.name}</b>
          </h4>
          <button className="addToCart-btn-list">
            <span>{necklace.price}</span>
          </button>
        </div>
        </Link>
      </div>
  );
}

export default Necklace;
