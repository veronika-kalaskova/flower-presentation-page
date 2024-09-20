import Image from "next/image";
import React from "react";
import AboutUsImage from "../assets/about-us.png";

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center px-8">
      <h1 className="title">
        About <span className="text-color">us</span>
      </h1>
      <p className="description mt-4">Where the flowers blooms.</p>
      <div className="mx-auto mt-12 flex max-w-[900px] flex-col gap-4 rounded-xl bg-white px-4 py-5 shadow-md sm:flex-row">
        <Image
          src={AboutUsImage}
          width={250}
          className="rounded-xl object-cover"
        />
        <div className="flex flex-1 flex-col justify-between gap-4">
          <p className="text-balance">
            The flower website blooms with an array of colorful petals, offering
            a virtual garden where floral enthusiasts and gift-seekers alike can
            wander and discover nature's beauty. From vibrant bouquets that
            convey heartfelt sentiments to delicate arrangements that whisper
            elegance, the website showcases a kaleidoscope of botanical wonders.
            With intuitive navigation and captivating visuals, it invites
            visitors to immerse themselves in a fragrant world where each click
            leads to a new floral delight.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:mt-auto">
            <div className="text-2xl">
              <span className="text-color">50+</span> VOLUNTEERS
            </div>
            <div className="text-2xl">
              <span className="text-color">1200+</span> SAVED PLANTS
            </div>
            <div className="text-2xl">
              <span className="text-color">10000+</span> WEBSITE VISITS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
