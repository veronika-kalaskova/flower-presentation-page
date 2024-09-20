import React from "react";
import Image from "next/image";
import Flower from "../assets/card-image.svg";

export default function PlantDetail() {
  return (
    <section className="px-8 mb-10">
      <div className="bg-white py-5 px-4 rounded-xl shadow-md max-w-[1200px] mx-auto">
        <h3 className="tag">Titan Arum (Amorphophallus titanum)</h3>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <Image src={Flower} className="h-auto w-auto object-cover rounded-xl"/>
          <div className="text-[18px] flex flex-col gap-4">
            <div>
              <span className="text-color">Species: </span>Amorphophallus
              titanum
            </div>
            <div>
              <span className="text-color">Common Name: </span>Titan Arum,
              Corpse Flower
            </div>
            <div>
              <span className="text-color">Native Habitat: </span>Rainforests of
              Sumatra, Indonesia
            </div>
            <div className="tag text-[18px]">Blooming Behavior</div>
            <p className="description">
              Known for its rare and unpredictable blooming, which can occur
              once every several years or even decades. The blooming process is
              rapid, with the flower opening fully within a few hours and
              lasting only one to two days. During blooming, it emits a strong
              odor resembling rotting flesh, which attracts pollinators such as
              carrion beetles and flies.
            </p>
            <button className="big-btn text-xl">
              Help us to save this plant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
