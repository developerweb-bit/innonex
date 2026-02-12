import HeroSection from "@/components/Home/HeroSection/HeroSection";
import HiringProcessSection from "@/components/Home/HiringProcessSection/HiringProcessSection";
import RolesSection from "@/components/Home/RolesSection/RolesSection";
import Solutions from "@/components/Home/Solutions/Solutions";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6">
      <HeroSection />
      <Solutions />
      <RolesSection />
      <HiringProcessSection/>
    </div>
  );
}
