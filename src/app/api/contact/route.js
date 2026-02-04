import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      service,
      destination,
      message,
      heardAbout,   // ✅ new
      referralName, // ✅ new (optional)
    } = body || {};

    // Required fields (keep strict)
    if (!name || !email || !phone || !service || !destination || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Decide if this is a flight request (based on the "service" string)
    const isFlight = String(service || "").toLowerCase().includes("flight");


    // Where your team receives inquiries
    // const toTeam = process.env.CONTACT_TO || "travels.booking@dianixsquare.com";

    // Where your team receives inquiries
    const toTeam = isFlight
    ? (process.env.FLIGHT_TO || "travels.booking@dianixsquare.com")
    : (process.env.CONTACT_TO || "info@dianixsquare.com");

    // Verified sender (must be verified in Resend)
    // const from =
    //   process.env.CONTACT_FROM ||
    //   "DiAnixSquare <travels.booking@dianixsquare.com>";

    // Verified sender (must be verified in Resend)
    const from = isFlight
    ? (process.env.FLIGHT_FROM || "DiAnixSquare <travels.booking@dianixsquare.com>")
    : (process.env.CONTACT_FROM || "DiAnixSquare <info@dianixsquare.com>");

    const teamSubject = `New Consultation Request — ${service} (${destination})`;

    const heardAboutLine = heardAbout
      ? `<p style="margin:0 0 10px"><b>How they heard about us:</b> ${escapeHtml(heardAbout)}</p>`
      : "";

    const referralLine =
      referralName && String(referralName).trim().length > 0
        ? `<p style="margin:0 0 10px"><b>Referral/Specified:</b> ${escapeHtml(referralName)}</p>`
        : "";

    const teamHtml = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">New Consultation / Inquiry</h2>

        <p style="margin:0 0 10px"><b>Name:</b> ${escapeHtml(name)}</p>
        <p style="margin:0 0 10px"><b>Email:</b> ${escapeHtml(email)}</p>
        <p style="margin:0 0 10px"><b>Phone/WhatsApp:</b> ${escapeHtml(phone)}</p>
        <p style="margin:0 0 10px"><b>Service interest:</b> ${escapeHtml(service)}</p>
        <p style="margin:0 0 10px"><b>Destination country:</b> ${escapeHtml(destination)}</p>
        ${heardAboutLine}
        ${referralLine}

        <p style="margin:14px 0 6px"><b>Message:</b></p>
        <div style="padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa">
          ${escapeHtml(message).replace(/\n/g, "<br/>")}
        </div>

        <p style="margin:14px 0 0;color:#6b7280;font-size:12px">
          Submitted from dianixsquare.com website form.
        </p>
      </div>
    `;

    // 1) Send to your team
    const sendToTeam = await resend.emails.send({
      from,
      to: toTeam,
      replyTo: email, // ✅ when YOU click Reply, it replies to customer
      subject: teamSubject,
      html: teamHtml,
    });

    if (sendToTeam.error) {
      return new Response(JSON.stringify({ error: "Email failed to send to team." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2) Auto-confirmation email to customer
    const customerSubject = "We received your request — DiAnixSquare";

    const customerHeardAbout = heardAbout
      ? `<p style="margin:0 0 6px"><b>How you heard about us:</b> ${escapeHtml(heardAbout)}</p>`
      : "";

    const customerReferral =
      referralName && String(referralName).trim().length > 0
        ? `<p style="margin:0 0 6px"><b>Referral / Note:</b> ${escapeHtml(referralName)}</p>`
        : "";

    const customerHtml = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Hi ${escapeHtml(name)},</h2>

        <p style="margin:0 0 12px">
          Thank you for contacting <b>DiAnixSquare International Agency</b>.
          We’ve received your request and our team is reviewing it.
        </p>

        <div style="padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa">
          <p style="margin:0 0 6px"><b>Service:</b> ${escapeHtml(service)}</p>
          <p style="margin:0 0 6px"><b>Destination:</b> ${escapeHtml(destination)}</p>
          ${customerHeardAbout}
          ${customerReferral}
          <p style="margin:0"><b>Your phone/WhatsApp:</b> ${escapeHtml(phone)}</p>
        </div>

        <p style="margin:12px 0 0">
          If you have urgent updates, you can message us on WhatsApp:
          <a href="https://wa.me/2349049279525">+234 904 927 9525</a>
        </p>

        <p style="margin:12px 0 0;color:#6b7280;font-size:12px">
          Disclaimer: We provide advisory and support services only. We do not guarantee approvals.
        </p>

        <p style="margin:14px 0 0">
          Kind regards,<br/>
          <b>DiAnixSquare International Agency</b>
        </p>
      </div>
    `;

    const sendToCustomer = await resend.emails.send({
      from,      // ✅ verified sender
      to: email, // ✅ customer email
      subject: customerSubject,
      html: customerHtml,
    });

    // If customer email fails, still return OK (team already received it)
    if (sendToCustomer.error) {
      return new Response(
        JSON.stringify({ ok: true, warning: "Customer confirmation email failed." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
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

