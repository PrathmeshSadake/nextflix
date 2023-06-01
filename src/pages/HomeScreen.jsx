import { useEffect, useState } from "react";
import requests from "../Requests";
import instance from "../axios";
import Banner from "../components/Banner";
import NetSliderContainer from "../components/SliderContainer";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const { data } = await instance.get(requests.fetchTrending);
    const updatedMovies = data.results.map((movie) => {
      return {
        adult: movie.adult,
        imageHighRes: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        genre_ids: movie.genre_ids,
        id: movie.id,
        original_language: movie.original_language,
        overview: movie.overview,
        popularity: movie.popularity,
        image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        release_date: movie.release_date,
        title: movie.title || movie.original_title,
        video: false,
        vote_average: 7,
        vote_count: 907,
      };
    });
    setMovies(updatedMovies);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Banner />
      <NetSliderContainer data={movies} />
    </div>
  );
};

export default HomeScreen;
