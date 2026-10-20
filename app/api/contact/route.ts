
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, message, company } = body as Record<
      string,
      unknown
    >;

    // Honeypot: silently accept the submission without sending an email.
    if (typeof company === "string" && company.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      cleanName.length > 120 ||
      !cleanEmail ||
      cleanEmail.length > 254 ||
      !cleanMessage ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.MY_PERSONAL_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact form environment variables are missing.");

      return NextResponse.json(
        { error: "The contact service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      subject: `New Portfolio Message from ${cleanName}`,
      replyTo: cleanEmail,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again later." },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form request error:", error);

    return NextResponse.json(
      { error: "Unable to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
