import { useEffect, useState } from "react";
import requests from "../Requests";
import instance from "../axios";

export default function Banner() {
  const [movie, setMovie] = useState(null);
  const fetchData = async () => {
    const { data } = await instance.get(requests.fetchTrending);
    setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(movie);
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 max-h-screen'>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.original_title}
            className='opacity-40 absolute inset-0 -z-10 h-screen w-screen object-cover'
          />

          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='max-w-2xl py-32 sm:py-48 lg:py-56'>
              <div className='text-left'>
                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                  {movie.title || movie.original_title}
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  {movie.overview}
                </p>
                <div className='mt-10 flex items-center justify-start gap-x-6'>
                  <a className='rounded-md bg-black border-2 border-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>
                    Get started
                  </a>
                  <div className='rounded-md border-2 px-3.5 py-1.5 border-white leading-6'>
                    <a className='font-semibold text-white'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      More info{" "}
                      <span className='ml-4' aria-hidden='true'>
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
