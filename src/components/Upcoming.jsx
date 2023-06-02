import { useEffect, useState } from "react";
import requests from "../Requests";
import instance from "../axios";
import ItemCarousel from "./ItemCarousel";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(requests.fetchUpcoming);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ItemCarousel items={movies} title={"Upcoming"}/>
    </div>
  );
};

export default Upcoming;
