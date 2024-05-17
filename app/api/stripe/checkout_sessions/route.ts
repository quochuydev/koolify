import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1PH0ZcLpywe3DIzEY5rlssaI",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: new URL("?success=true", process.env.APP_URL).toString(),
      cancel_url: new URL("?canceled=true", process.env.APP_URL).toString(),
    });

    console.log(`debug:session`, session.url);
    if (!session.url) throw session;

    return NextResponse.redirect(session.url, { status: 303 });
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
