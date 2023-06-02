import { useEffect, useState } from "react";
import requests from "../Requests";
import instance from "../axios";
import ItemCarousel from "./ItemCarousel";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(requests.fetchTopRated);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ItemCarousel items={movies} title={"Top Rated"} />
    </div>
  );
};

export default TopRated;
