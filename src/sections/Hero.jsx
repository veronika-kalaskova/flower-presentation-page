import Image from "next/image";
import Flower from "@/assets/flower.svg";

export const Hero = () => {
  return (
    <section className="px-8">
      <div className="flex flex-col sm:flex-row sm:justify-center items-center min-h-[300px]">
        <div className="flex flex-col gap-3 sm:max-w-[500px]">
          <h1 className="uppercase text-balance text-3xl md:text-4xl">
            Discover <span className="text-[#CC8990]">rare plants</span> and{" "}
            <span className="text-[#CC8990]">plant breeding.</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam at
            arcu a est sollicitudin euismod. Nullam justo enim, consectetuer
            nec, ullamcorper ac, vestibulum in, elit.
          </p>
        </div>
        <Image src={Flower} alt="Flower" width={315} height={296} />
      </div>
    </section>
  );
};
