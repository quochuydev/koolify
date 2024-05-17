import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.priceId) throw new Error("invalid price ID");

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: body.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: new URL("?success=true", process.env.APP_URL).toString(),
      cancel_url: new URL("?canceled=true", process.env.APP_URL).toString(),
    });

    if (!session.url) throw session;

    return NextResponse.json(
      {
        url: session.url,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.log(`debug:err`, err);

    return NextResponse.json(
      {
        message: err.message,
      },
      {
        status: err.statusCode || 500,
      }
    );
  }
}
