import React from "react";
import Image from "next/image";
import Volunteer from "../assets/volunteer.png";

export default function OurVolunteers() {
  return (
    <section className="mb-10">
      <div className="container">
        <h2 className="tag">Our volunteers</h2>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          {/* Duplicate three times */}
          {[...new Array(3)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <div className="mt-5 flex w-full sm:max-w-[330px] flex-col items-center justify-center gap-3 rounded-xl bg-white px-4 py-5 shadow-md">
                <Image
                  src={Volunteer}
                  alt="Volunteer"
                  className="rounded-full aspect-square object-cover"
                  quality={100}
                  width={80}
                />
                <h2 className="text-center text-xl text-[#CD8990]">
                  Name Surname
                </h2>
                <p className="description text-center">
                  A treasure trove for plant enthusiasts!
                </p>
                <button className="btn">Contact me</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
