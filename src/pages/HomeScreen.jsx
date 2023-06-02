import Banner from "../components/Banner";
import Movies from "../components/Movies";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";
import Upcoming from "../components/Upcoming";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <Trending  />
      <TopRated  />
      <Upcoming  />
      <Movies  />
    </div>
  );
};

export default HomeScreen;
