import Image from "next/image";
import Flower from "@/assets/flower.svg";

export const Hero = () => {
  return (
    <section className="mt-10 overflow-x-clip px-10">
      <div className="relative flex md:justify-center items-center min-h-[300px]">
        <div className="flex flex-col gap-3 max-w-[230px] md:max-w-[500px] sm:max-w-[300px]">
          <h1 className="uppercase text-2xl md:text-3xl">
            Discover <span className="text-[#CC8990]">rare plants</span> and{" "}
            <span className="text-[#CC8990]">plant breeding.</span>
          </h1>
          <p className="text-sm text-[#939393]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam at
            arcu a est sollicitudin euismod. Nullam justo enim, consectetuer
            nec, ullamcorper ac, vestibulum in, elit.
          </p>
        </div>
        <Image
          src={Flower}
          alt="Flower"
          width={315}
          height={296}
          className="flower-img"
        />
      </div>
    </section>
  );
};
