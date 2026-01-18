import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, service, destination, message } = body || {};

    if (!name || !email || !phone || !service || !destination || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO || "info@dianixsquare.com";
    const from = process.env.CONTACT_FROM || "DiAnixSquare <onboarding@resend.dev>";

    const subject = `New Consultation Request — ${service} (${destination})`;

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">New Consultation / Inquiry</h2>
        <p style="margin:0 0 10px"><b>Name:</b> ${escapeHtml(name)}</p>
        <p style="margin:0 0 10px"><b>Email:</b> ${escapeHtml(email)}</p>
        <p style="margin:0 0 10px"><b>Phone/WhatsApp:</b> ${escapeHtml(phone)}</p>
        <p style="margin:0 0 10px"><b>Service interest:</b> ${escapeHtml(service)}</p>
        <p style="margin:0 0 10px"><b>Destination country:</b> ${escapeHtml(destination)}</p>
        <p style="margin:14px 0 6px"><b>Message:</b></p>
        <div style="padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa">
          ${escapeHtml(message).replace(/\n/g, "<br/>")}
        </div>
        <p style="margin:14px 0 0;color:#6b7280;font-size:12px">
          Submitted from dianixsquare.com website form.
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // so you can reply directly to the client
      subject,
      html,
    });

    if (error) {
      return new Response(JSON.stringify({ error: "Email failed to send." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
