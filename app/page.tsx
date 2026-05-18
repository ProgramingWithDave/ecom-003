import HeaderSlider from "@/components/HeaderSlider";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
      </div>
    </div>
  );
}
