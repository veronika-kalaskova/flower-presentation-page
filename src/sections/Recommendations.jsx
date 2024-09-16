import Image from "next/image";
import CardImage from "@/assets/card-image.svg";
import React from "react";

export const Recommendations = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center sm:block">
        <h2 className="tag">Our recommendation</h2>
        </div> 
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Duplicate three times */}
          {[...new Array(3)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col gap-3 items-center justify-center bg-white py-5 px-4 mt-5 rounded-lg shadow-md max-w-[330px]">
                <Image src={CardImage} alt="Card image" />
                <h2 className="text-[#CD8990] text-xl text-center">
                  Celestial Blossom
                </h2>
                <p className="text-center description">
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
