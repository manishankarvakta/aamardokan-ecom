import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, getProductsByCategory, searchProducts } from "@/lib/products";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || undefined;
    const query = searchParams.get("q") || "";

    let products;
    if (query) {
        products = await searchProducts(query, category);
    } else if (category) {
        products = await getProductsByCategory(category);
    } else {
        products = await getAllProducts();
    }

    return NextResponse.json(products);
}
