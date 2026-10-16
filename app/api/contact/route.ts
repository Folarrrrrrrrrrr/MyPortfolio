import { NextResponse } from "next/server";

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  company: string;
};

function isContactSubmission(value: unknown): value is ContactSubmission {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "message" in value &&
    typeof value.message === "string" &&
    "company" in value &&
    typeof value.company === "string"
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please submit the form with valid information." },
      { status: 400 },
    );
  }

  if (!isContactSubmission(payload)) {
    return NextResponse.json(
      { error: "Please complete all contact form fields." },
      { status: 400 },
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (payload.company.trim()) {
    return NextResponse.json(
      { error: "Unable to submit this message." },
      { status: 400 },
    );
  }

  if (
    name.length === 0 ||
    name.length > 120 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length === 0 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please check your name, email, and message and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error(
      "Contact form email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    );
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let resendResponse: Response;

  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["oluwolefolawe@gmail.com"],
        reply_to: email,
        subject: "New portfolio contact form message",
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Contact form email request failed.", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text();
    console.error(
      `Contact form email provider returned ${resendResponse.status}: ${providerError}`,
    );
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your message was sent." });
}
