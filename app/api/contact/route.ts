import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = ["contact@thercalenergies.com"];
const BCC = ["pierre.dieng@thercalenergies.com", "radouane.salaly@thercalenergies.com"];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      subject = "Nouveau message du formulaire",
      message = "",
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

    await resend.emails.send({
      from: "THERCAL Energies <contact@thercalenergies.com>",
      to: TO,
      bcc: BCC,
      reply_to: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}

