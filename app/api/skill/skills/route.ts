import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await fetch(`http://localhost:1337/api/skills?timestamp=${Date.now()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return NextResponse.json(data, { revalidate: 10 } as any);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, {
      status: 500,
    } as any);
  }
};
