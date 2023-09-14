import { useEffect, useState } from "react";
import Necklace from "./Necklace";
import axios from "axios";
import '../List.css'
const API = process.env.REACT_APP_API;

function Necklaces() {
  const [necklaces, setNecklaces] = useState([]);

  useEffect(() => {
    axios.get(`${API}/necklaces`).then((res) => {
      setNecklaces(res.data);
    });
  }, []);
  return (
    <div>
      {necklaces.map((necklace, id) => {
        return <Necklace key={necklace.id} necklace={necklace} index={id} />;
      })}
    </div>
  );
}

export default Necklaces;
