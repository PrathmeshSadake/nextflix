/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ItemCarousel = ({ items }) => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass='carousel-item-padding-40-px'
    >
      {items.map((item) => (
        <div className='container p-1 cursor-pointer' key={item.id}>
          <img
            className='image'
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt={item.title}
          />
          <div className='overlay'>{item.title}</div>
        </div>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;
