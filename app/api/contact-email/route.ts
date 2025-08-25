import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));

    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      message = "",
    } = body || {};

    const appPassword = process.env.GOOGLE_APP_PASSWORD;
    const gmailUser = process.env.GOOGLE_USER || "jemachemtrading@gmail.com";

    if (!appPassword) {
      return new Response(
        JSON.stringify({ error: "Missing GOOGLE_APP_PASSWORD env variable" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: appPassword,
      },
    });


    const subject = `New Contact Form Submission — ${firstName} ${lastName}`.trim();

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f6f8fd; padding:24px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e6ecff; border-radius:12px; overflow:hidden;">
          <tr>
            <td style="padding:24px; text-align:center; background:#f8fafc; border-bottom:1px solid #e6ecff;">
              <div style="font-size:22px; font-weight:700; color:#0b57d0; letter-spacing:0.3px;">Jemachem Trading Contact Form Submission</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h2 style="margin:0 0 12px; color:#0b57d0; font-size:20px;">New contact request</h2>
              <p style="margin:0 0 20px; color:#334155;">You received a new message from the website contact form.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0 8px;">
                <tr>
                  <td style="width:180px; color:#64748b;">Name</td>
                  <td style="color:#0f172a; font-weight:600;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="width:180px; color:#64748b;">Email</td>
                  <td><a href="mailto:${email}" style="color:#0b57d0; text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="width:180px; color:#64748b;">Phone</td>
                  <td style="color:#0f172a;">${phone}</td>
                </tr>
                <tr>
                  <td style="width:180px; color:#64748b; vertical-align:top; padding-top:8px;">Message</td>
                  <td style="color:#0f172a; white-space:pre-wrap;">${String(message || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
                </tr>
              </table>

              <div style="margin-top:24px; padding:12px 16px; background:#f1f5f9; border-radius:8px; color:#334155; font-size:13px;">
                This is an automated notification from the website contact form.
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px; background:#f8fafc; color:#64748b; font-size:12px; text-align:center;">
              © ${new Date().getFullYear()} Jemachem Trading PLC
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `Jemachem Website <${gmailUser}>`,
      to: gmailUser,
      subject,
      html,
      replyTo: email || undefined,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


