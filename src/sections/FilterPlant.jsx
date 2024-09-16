import React from "react";
import Image from "next/image";

export default function FilterPlant() {
  const flowers = [
    { name: "Rosa canina" },
    { name: "Acer platanoides" },
    { name: "Quercus robur" },
    { name: "Pinus sylvestris" },
    { name: "Taraxacum officinale" },
    { name: "Lavandula angustifolia" },
    { name: "Fagus sylvatica" },
    { name: "Hedera helix" },
    { name: "Prunus avium" },
    { name: "Betula pendula" },
  ];

  return (
    <section className="px-8">
      <div className="max-w-[500px] sm:max-w-full mx-auto">
        <h1 className="title text-center">
          Pick a <span className="text-color">rare plant</span> to learn more.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <input
          type="text"
          placeholder="Filter by category:"
          className="price-tag w-[300px]"
        />

        <input
          type="select"
          placeholder="Filter by species:"
          className="price-tag w-[300px]"
        />
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center mx-auto max-w-[900px]">
        {flowers.map((flower) => (
          <div className="tag">{flower.name}</div>
        ))}
      </div>
    </section>
  );
}
