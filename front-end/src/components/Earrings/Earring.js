import { Link } from "react-router-dom";

function Earring({ earring }) {
  return (
    <div className="column">
      <Link to={`/earrings/${earring.id}`}>
        <div className="card">
          <img src={earring.image} alt={earring.name} />
          <h4>
            <b className="product-name">{earring.name}</b>
          </h4>
          <button className="addToCart-btn-list">
            {" "}
            <span>{earring.price}</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Earring;
