import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Controleer eerst of de API key bestaat
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY ontbreekt in .env.local");

      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY ontbreekt.",
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

    // Validatie
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Vul alle verplichte velden in.",
        },
        { status: 400 }
      );
    }

    // Maak Resend pas hier aan
    const resend = new Resend(process.env.RESEND_API_KEY);

    // E-mail versturen
    const { data, error } = await resend.emails.send({
      from: "Contactformulier <onboarding@resend.dev>",
      to: ["wilske.jarne@gmail.com"],
      replyTo: email,
      subject: `Nieuw bericht van ${firstname} ${lastname}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #222;
          "
        >
          <h2>Nieuw bericht via je portfolio</h2>

          <p>
            <strong>Naam:</strong><br />
            ${escapeHtml(firstname)} ${escapeHtml(lastname)}
          </p>

          <p>
            <strong>E-mail:</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Telefoon:</strong><br />
            ${escapeHtml(phone || "Niet opgegeven")}
          </p>

          <p>
            <strong>Bericht:</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    // Resend heeft een fout teruggegeven
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            error.message || "E-mail kon niet worden verzonden.",
        },
        { status: 500 }
      );
    }

    console.log("E-mail succesvol verzonden:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Bericht succesvol verzonden!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Er is een serverfout opgetreden.",
      },
      { status: 500 }
    );
  }
}

// Beschermt de HTML-mail tegen HTML-injectie
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}