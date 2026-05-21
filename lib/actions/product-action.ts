"use server"

import { ProductParams } from "@/shared.types";
import { createClient } from "../supabase/server"

export async function fetchProduct(): Promise<ProductParams[]> {
    const supabase = await createClient();
   const { data: products, error } = await supabase.from("products").select("*");

   if(error) {
    console.error("error: ", error)
    return []
   }

   return products
}

export async function fetchProductById(id: string) {
    const supabase = await createClient();
 

    try {
        const {data: product, error} = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

        if(error) {
            console.log(error)
            return null;
        }
        return product;
    } catch (error) {
        console.log(error);
        return null;
    }
}