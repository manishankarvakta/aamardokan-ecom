import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}
