import React from "react";
import SignageProduct from "./signageProduct";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const DigitalSignages = ({ events }) => {
  const allEvents = [...events.eventsOne, ...events.eventsTwo];
  console.log(events );
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={20000}
      fillParent
      bullets={false}
      organicArrows={false}
    >
      {allEvents.map((event, k) => (
        <div key={k} className="signages">
          <SignageProduct event={event} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default DigitalSignages;
