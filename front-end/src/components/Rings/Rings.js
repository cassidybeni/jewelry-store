import { useEffect, useState } from "react";
import Ring from "./Ring";
import axios from "axios";
import LoadingData from "../LoadingData/LoadingData";
import "../List.css";
const API = process.env.REACT_APP_API;

function Rings() {
  const [rings, setRings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/rings`)
      .then((res) => {
        setRings(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <LoadingData></LoadingData>
        </div>
      ) : (
        rings.map((ring, id) => <Ring key={ring.id} ring={ring} index={id} />)
      )}
    </div>
  );
}

export default Rings;
