import { useEffect, useState } from "react";
import Ring from "./Ring";
import axios from "axios";
import '../List.css'
const API = process.env.REACT_APP_API;

function Rings() {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/rings`).then((res) => {
      setRings(res.data);
    });
  }, []);
  return (
    <div>
      {rings.map((ring, id) => {
        return <Ring key={ring.id} ring={ring} index={id} />;
      })}
    </div>
  );
}

export default Rings;
