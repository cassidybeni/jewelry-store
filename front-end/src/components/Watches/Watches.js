import { useEffect, useState } from "react";
import Watch from "./Watch";
import axios from "axios";
import "../List.css";
const API = process.env.REACT_APP_API;

function Watches() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios.get(`${API}/watches`).then((res) => {
      setWatches(res.data);
    });
  }, []);
  return (
    <div>
      {watches.map((watch, id) => {
        return <Watch key={watch.id} watch={watch} index={id} />;
      })}
    </div>
  );
}

export default Watches;
