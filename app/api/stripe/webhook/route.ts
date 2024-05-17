// import configuration from "@/configuration";
// import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();

    const object = event.data?.object?.object;
    const status = (event.data?.object as any)?.status;

    console.log(`debug:`, object, status);

    if (event.type === "charge.succeeded") {
      if (object === "charge" && status === "succeeded") {
        console.log(`debug:`, event.data.object.payment_method_details);
      }
    }

    if (event.type === "checkout.session.completed") {
      if (object === "checkout.session" && status === "complete") {
        //
      }
    }
  } catch (err: any) {
    console.log(`debug:err`, err);
  }

  return NextResponse.json({}, { status: 200 });
}

const data = {
  id: "evt_3PHM30Lpywe3DIzE1SLY4e9K",
  object: "event",
  api_version: "2020-08-27",
  created: 1715934111,
  data: {
    object: {
      id: "ch_3PHM30Lpywe3DIzE1wnh7OVz",
      object: "charge",
      amount: 5900,
      amount_captured: 5900,
      amount_refunded: 0,
      application: null,
      application_fee: null,
      application_fee_amount: null,
      balance_transaction: null,
      billing_details: [Object],
      calculated_statement_descriptor: "QUOCHUY.DEV",
      captured: true,
      created: 1715934110,
      currency: "usd",
      customer: null,
      description: null,
      destination: null,
      dispute: null,
      disputed: false,
      failure_balance_transaction: null,
      failure_code: null,
      failure_message: null,
      fraud_details: {},
      invoice: null,
      livemode: false,
      metadata: {},
      on_behalf_of: null,
      order: null,
      outcome: [Object],
      paid: true,
      payment_intent: "pi_3PHM30Lpywe3DIzE1rnarphV",
      payment_method: "pm_1PHM2zLpywe3DIzEuR9erP7i",
      payment_method_details: [Object],
      radar_options: {},
      receipt_email: null,
      receipt_number: null,
      receipt_url:
        "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSHQyS3BMcHl3ZTNESXpFKJ-nnLIGMgYbzBKsDL06LBZRkx1NjC7sYc-VaNy8ZPpG2CZpgiYeCbd-DA7AaDYgRMBcWLxudiZexoYU",
      refunded: false,
      refunds: [Object],
      review: null,
      shipping: null,
      source: null,
      source_transfer: null,
      statement_descriptor: null,
      statement_descriptor_suffix: null,
      status: "succeeded",
      transfer_data: null,
      transfer_group: null,
    },
  },
  livemode: false,
  pending_webhooks: 2,
  request: {
    id: "req_bRB9NkqsAd4KYx",
    idempotency_key: "5ecbb9d8-d094-457e-93bb-4374da96c4fd",
  },
  type: "charge.succeeded",
};
