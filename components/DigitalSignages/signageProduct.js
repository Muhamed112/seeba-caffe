import React from "react";
import Image from "next/image";
import SignageFooter from "./signageFooter";
import SignageHeading from "./signageHeading";
import image from "next/image";

const SignageProduct = ({ event }) => {
  const { name, image: images, params, description } = event;
  const {
    date_start,
    date_end,
    date_text,
    dates,
    repeating_day,
    skip_dates,
    time_text,
  } = params;

  const dateTags = [];

  if (!date_start && !date_end) {
    if (date_text) {
      dateTags.push(date_text);
    }
  } else if (date_start && date_end) {
    dateTags.push(`${date_start} to ${date_end}`);
  }

  return (
    <div className="signage signage-horizontal signage-product">
      <SignageHeading className="signage-vertical-heading" />
      <div className="signage-product-image">
        <img src={images["600x600"]} alt="Digital Signage Product" />
        {/* <Image
          src={images.full}
          alt="Digital Signage Product"
          layout="responsive"
          width={2160}
          height={3840}
        /> */}
      </div>
      <div className="signage-product-content-container">
        <SignageHeading className="signage-horizontal-heading" />
        <div className="signage-content signage-product-content">
          <div className="signage-product-content-header">
            <p className="title is-1">{name}</p>
            <div className="signage-product-content-header-date">
              {dateTags.map((tag, k) => (
                <p key={k} className="date-tag">
                  {tag}
                </p>
              ))}
              {time_text !== "00:00 - 00:00" && (
                <p className="time">
                  <span className="time-icon">
                    <img src="/images/time.svg" alt="Time icon" />
                  </span>{" "}
                  {time_text}
                </p>
              )}
            </div>
          </div>
          <div
            className="caption"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <p className="caption">
            Ipsum, sed a felis vitae fames aliquet molestie semper. Ac egestas
            duis lacus accumsan ac tellus. Lorem in dignissim et risus viverra
            dui tincidunt nulla. Sem ultrices turpis ullamcorper egestas etiam
            proin massa vestibulum. Tellus ullamcorper morbi aliquam luctus urna
            neque. Tempor eu purus molestie sed. A nullam amet quis dapibus
            ultricies.
          </p> */}
          <img
            className="signage-product-content-decor"
            src="/images/hero-upper-decor-rotated.png"
            alt="Decoration"
          />
        </div>
        <SignageFooter />
      </div>
    </div>
  );
};

export default SignageProduct;
