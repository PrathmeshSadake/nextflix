import { useEffect, useState } from "react";
import ItemCarousel from "./ItemCarousel";
import instance from "../axios";
import requests from "../Requests";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(requests.discoverMovies);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ItemCarousel items={movies} title={"Movies"} />
    </div>
  );
};

export default Movies;
