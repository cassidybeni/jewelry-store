import { useEffect, useState } from "react";
import Watch from "./Watch";
import axios from "axios";
import LoadingData from "../LoadingData/LoadingData";
import "../List.css";
const API = process.env.REACT_APP_API;

function Watches() {
  const [watches, setWatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/watches`)
      .then((res) => {
        setWatches(res.data);
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
        watches.map((watch, id) => (
          <Watch key={watch.id} watch={watch} index={id} />
        ))
      )}
    </div>
  );
}

export default Watches;
