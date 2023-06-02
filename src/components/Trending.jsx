import { useEffect, useState } from "react";
import ItemCarousel from "./ItemCarousel";
import instance from "../axios";
import requests from "../Requests";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(requests.fetchTrending);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ItemCarousel items={movies} title={"Trending"} />
    </div>
  );
};

export default Trending;
