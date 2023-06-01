/* eslint-disable react/prop-types */
import NetSlider from "netslider";
import "netslider/dist/styles.min.css";

function SliderContainer({ videoModel }) {
  return <div className='slider-container-title'>{videoModel.title}</div>;
}

function SliderTemplate({ videoModel, model }) {
  return (
    <div className='slider-container-wrapper'>
      <SliderContainer videoModel={videoModel} model={model} />
    </div>
  );
}
// eslint-disable-next-line no-unused-vars
export default function NetSliderContainer(props) {
  return (
    <div
      className='netslider-container py-6'
      style={{ overflow: "hidden", height: "400px" }}
    >
      <NetSlider
        className='netslider_title_card'
        data={props.data}
        slideTemplate={(props) => <SliderTemplate {...props} />}
      />
    </div>
  );
}
