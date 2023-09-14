import { useEffect, useState } from "react";
import Earring from "./Earring";
import axios from "axios";
import "../List.css";
const API = process.env.REACT_APP_API;

function Earrings() {
  const [earrings, setEarrings] = useState([]);

  useEffect(() => {
    axios.get(`${API}/earrings`).then((res) => {
      setEarrings(res.data);
    });
  }, []);
  return (
    <div>
      {earrings.map((earring, id) => {
        return <Earring key={earring.id} earring={earring} index={id} />;
      })}
    </div>
  );
}

export default Earrings;
