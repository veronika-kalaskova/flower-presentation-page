import Image from "next/image";
import CardImage from "../assets/card-image.jpg";
import React from "react";

export const Recommendations = () => {
  return (
    <section>
      <div className="container">
        <h2 className="tag">Our recommendation</h2>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          {/* Duplicate three times */}
          {[...new Array(3)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 rounded-xl bg-white px-4 py-5 shadow-md sm:max-w-[330px]">
                <Image
                  src={CardImage}
                  alt="Card image"
                  className="rounded-xl"
                />
                <h2 className="text-center text-xl text-[#CD8990]">
                  Celestial Blossom
                </h2>
                <p className="description text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Nullam at arcu a est sollicitudin euismod.
                </p>
                <button className="btn">Learn more</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
