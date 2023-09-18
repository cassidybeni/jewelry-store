import { useEffect, useState } from "react";
import Earring from "./Earring";
import axios from "axios";
import LoadingData from "../LoadingData/LoadingData";
import "../List.css";
const API = process.env.REACT_APP_API;

function Earrings() {
  const [earrings, setEarrings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/earrings`)
      .then((res) => {
        setEarrings(res.data);
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
        earrings.map((earring, id) => (
          <Earring key={earring.id} earring={earring} index={id} />
        ))
      )}
    </div>
  );
}

export default Earrings;
