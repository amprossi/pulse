import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET() {
    return NextResponse.json({ok: true, who: "monitors"});
    const monitors = await prisma.monitors.findMany({
        orderBy: {id: "desc"}
    });
    return NextResponse.json(monitors);
}
