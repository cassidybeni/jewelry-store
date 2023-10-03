import { Link } from "react-router-dom";

function Bracelet({ bracelet }) {
  return (
    <div className="column">
    <Link to={`/bracelets/${bracelet.id}`} className="card-link">
      <div className="card">
        <img className="list-image" src={bracelet.image} alt={bracelet.name} />
        <h4>
          <b className="product-name">{bracelet.name}</b>
        </h4>
        <button className="addToCart-btn-list">
            <span>{bracelet.price}</span>
          </button>
      </div>
      </Link>
    </div>
  );
}

export default Bracelet;
