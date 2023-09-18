import { useEffect, useState } from "react";
import Necklace from "./Necklace";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";
import "../List.css";
const API = process.env.REACT_APP_API;

function Necklaces() {
  const [necklaces, setNecklaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/necklaces`)
      .then((res) => {
        setNecklaces(res.data);
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
        necklaces.map((necklace, id) => (
          <Necklace key={necklace.id} necklace={necklace} index={id} />
        ))
      )}
    </div>
  );
}

export default Necklaces;
