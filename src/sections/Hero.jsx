import Image from "next/image";
import Flower from "../assets/flower.png";

export const Hero = () => {
  return (
    <section className="px-8">
      <div className="flex flex-col sm:flex-row sm:justify-center items-center min-h-[300px]">
        <div className="flex flex-col gap-3 sm:max-w-[500px]">
          <h1 className="title">
            Discover <span className="text-color">rare plants</span> and
            <span className="text-color"> plant breeding.</span>
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
