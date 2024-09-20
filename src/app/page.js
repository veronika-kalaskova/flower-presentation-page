import { Hero } from "../sections/Hero";
import { Recommendations } from "../sections/Recommendations";
import { SupportUs } from "../sections/SupportUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Recommendations />
      <SupportUs />
    </main>
  );
}
