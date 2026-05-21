import ProductDetails from "@/components/ProductDetails";
import { fetchProductById } from "@/lib/actions/product-action";


async function page({params,}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params;

    // fetch product 
    const product = await fetchProductById(id)
  return (
    <div>
        <ProductDetails product={product} />
    </div>
  )
}

export default page