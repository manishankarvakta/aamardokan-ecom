import { NextResponse } from "next/server";
import { getCategories } from "@/lib/products";

export async function GET() {
    const categories = getCategories();
    return NextResponse.json(categories);
}
