import { Suspense } from "react";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <Suspense
      fallback={<h1 style={{ color: "white", fontSize: 50 }}>SUSPENSE</h1>}
    >
      <HeroSection />
    </Suspense>
  );
}
