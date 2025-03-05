import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req) => {
  await connectDB();
  let body = await req.formData();
  body = Object.fromEntries(body);

  //Check if razorPayOrderId is present on the server
  let p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json({ success: false, message: "Order Id not Found" });
  }

  //Verify the Payment
  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    process.env.KEY_SECRET
  );

  if (xx) {
    // update the payment statux
    const updatedPayment = await Payment.findOneAndUpdate(
      { old: body.razorpar_order_id },
      { done: "true" },
      { new: true }
    );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};
