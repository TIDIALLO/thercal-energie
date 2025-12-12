import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TO = ["contact@thercalenergies.com"];
const BCC = ["pierre.dieng@thercalenergies.com", "radouane.salaly@thercalenergies.com"];
const FROM = process.env.RESEND_FROM || "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    // Charge .env.local en dev si la variable manque (utile en local Windows)
    if (!process.env.RESEND_API_KEY && process.env.NODE_ENV !== "production") {
      try {
        const dotenv = await import("dotenv");
        dotenv.config({ path: ".env.local" });
      } catch (err) {
        console.warn("[contact] dotenv load failed in dev:", err);
      }
    }

    const apiKey = process.env.RESEND_API_KEY;

    const data = await request.json();
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      subject = "Nouveau message du formulaire",
      message = "",
      attachments = [],
    } = data ?? {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const html = `
      <h2>Nouveau message via thercalenergies.com</h2>
      <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || "N/A"}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const safeAttachments =
      Array.isArray(attachments) &&
      attachments
        .filter((att) => att && att.filename && att.content)
        .map((att) => ({
          filename: String(att.filename),
          content: String(att.content),
        }));

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY manquante - envoi bloqué");
      return NextResponse.json({ ok: false, error: "missing_api_key" }, { status: 500 });
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        bcc: BCC,
        reply_to: email,
        subject,
        html,
        attachments: safeAttachments && safeAttachments.length > 0 ? safeAttachments : undefined,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Resend error:", response.status, body);
      return NextResponse.json(
        { ok: false, error: "send_failed", resendStatus: response.status, resendBody: body.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}

