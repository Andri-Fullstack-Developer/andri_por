import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await fetch(
      `https://appealing-hope-d4588306a3.strapiapp.com/api/backends?timestamp=${Date.now()}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return NextResponse.json(data, { revalidate: 10 } as any);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, {
      status: 500,
    } as any); // Use type casting to 'any'
  }
};
