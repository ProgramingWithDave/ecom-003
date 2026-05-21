import Footer from "@/components/Footer";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import { Navbar } from "@/components/Navbar";
import { fetchProduct } from "@/lib/actions/product-action";
import Image from "next/image";

export default async function Home() {
  const allProducts = await fetchProduct()

  console.log(allProducts)
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
      </div>

      <HomeProducts products={allProducts} />

      <Footer />
    </div>
  );
}
