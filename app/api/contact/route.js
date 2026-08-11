import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Check if the API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing in .env.local");

      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      firstname,
      lastname,
      email,
      phone,
      message,
    } = body;

    // Validation
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["wilske.jarne@gmail.com"],
      replyTo: email,
      subject: `New message from ${firstname} ${lastname}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #222;
          "
        >
          <h2>New message via your portfolio</h2>

          <p>
            <strong>Name:</strong><br />
            ${escapeHtml(firstname)} ${escapeHtml(lastname)}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${escapeHtml(phone || "Not provided")}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "The email could not be sent.",
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "A server error occurred.",
      },
      { status: 500 }
    );
  }
}

// Protects the HTML email against HTML injection
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}