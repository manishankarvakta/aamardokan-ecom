import { NextRequest, NextResponse } from "next/server";

// Mock database for orders (in memory for demo)
const orders: any[] = [];

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { items, total, customer } = body;

        const newOrder = {
            id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            status: "Processing",
            total,
            itemsCount: items.length,
            image: items[0]?.image || "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
            customer,
            items,
        };

        orders.push(newOrder);

        return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create order" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    // In a real app, you'd filter by customer ID from session
    return NextResponse.json(orders);
}
