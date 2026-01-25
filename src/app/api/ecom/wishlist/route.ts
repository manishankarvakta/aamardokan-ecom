import { NextRequest, NextResponse } from "next/server";

// Mock database for wishlist (in memory for demo)
let wishlistItems: any[] = [];

export async function GET(req: NextRequest) {
    return NextResponse.json(wishlistItems);
}

export async function POST(req: NextRequest) {
    try {
        const item = await req.json();
        const exists = wishlistItems.find(i => i.id === item.id);
        if (!exists) {
            wishlistItems.push(item);
        }
        return NextResponse.json({ success: true, wishlist: wishlistItems }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update wishlist" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (id) {
            wishlistItems = wishlistItems.filter(i => i.id !== id);
        }
        return NextResponse.json({ success: true, wishlist: wishlistItems });
    } catch (error) {
        return NextResponse.json({ message: "Failed to remove from wishlist" }, { status: 500 });
    }
}
