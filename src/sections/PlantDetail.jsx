import React from "react";
import Image from "next/image";
import Flower from "../assets/card-image.jpg";

export default function PlantDetail() {
  return (
    <section className="mb-10 px-8">
      <div className="mx-auto max-w-[1200px] rounded-xl bg-white px-4 py-5 shadow-md">
        <h3 className="tag">Titan Arum (Amorphophallus titanum)</h3>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <Image src={Flower} className="rounded-xl object-cover" />
          <div className="flex flex-col gap-4 text-[18px]">
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
            <button className="big-btn mt-auto text-xl">
              Help us to save this plant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
