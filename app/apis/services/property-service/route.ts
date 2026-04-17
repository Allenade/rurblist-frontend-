import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const formData = await req.formData();

  const images = formData.getAll("images");

  console.log("Images:", images);

  return NextResponse.json({
    message: "Images received",
  });
}