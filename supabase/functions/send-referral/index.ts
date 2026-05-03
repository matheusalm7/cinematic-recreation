// Send referral form data via email (Resend) — used by /indique-e-ganhe and /refer-and-earn
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RECIPIENTS = [
  "agnuscreativestudio@gmail.com",
  "matheusnascimentoalm777@gmail.com",
];

interface Payload {
  locale: "pt" | "en";
  page: string;
  data: Record<string, string>;
}

const escapeHtml = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const labelsPT: Record<string, string> = {
  companyName: "Nome do negócio indicado",
  contactPerson: "Pessoa de contato",
  referredPhone: "Telefone do indicado",
  instagramOrSite: "Instagram/Site",
  talkedAbout: "Já conversou com a Agnus?",
  yourName: "Seu nome",
  yourPhone: "Seu WhatsApp",
  yourEmail: "Seu email",
  payout: "Chave PIX",
  comment: "Comentário",
};
const labelsEN: Record<string, string> = {
  companyName: "Referred business name",
  contactPerson: "Business contact name",
  referredPhone: "Business phone number",
  instagramOrSite: "Website/Instagram",
  talkedAbout: "Spoken with Agnus before?",
  yourName: "Your full name",
  yourPhone: "Your phone number",
  yourEmail: "Your email",
  payout: "Preferred payout method",
  comment: "Additional notes",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("[send-referral] missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const payload = (await req.json()) as Payload;
    const { locale, page, data } = payload;
    if (!data || typeof data !== "object") {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const labels = locale === "en" ? labelsEN : labelsPT;
    const subject =
      locale === "en"
        ? "New referral submitted to Agnus"
        : "Nova indicação recebida pela Agnus";

    const submittedAt = new Date().toISOString();

    const rows = Object.entries(data)
      .filter(([_, v]) => v !== undefined && v !== null && String(v).trim() !== "")
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#052E28;width:38%">${escapeHtml(
            labels[k] ?? k,
          )}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#222">${escapeHtml(
            String(v),
          )}</td></tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;background:#ffffff;padding:24px">
        <h2 style="color:#052E28;margin:0 0 8px">${escapeHtml(subject)}</h2>
        <p style="color:#666;margin:0 0 16px">${escapeHtml(
          locale === "en" ? "Page" : "Página",
        )}: ${escapeHtml(page)}<br/>${escapeHtml(
          locale === "en" ? "Submitted at" : "Enviado em",
        )}: ${escapeHtml(submittedAt)}</p>
        <table style="border-collapse:collapse;width:100%;border:1px solid #eee;border-radius:8px;overflow:hidden">
          ${rows}
        </table>
      </div>`;

    const text =
      `${subject}\n\n${locale === "en" ? "Page" : "Página"}: ${page}\n${
        locale === "en" ? "Submitted at" : "Enviado em"
      }: ${submittedAt}\n\n` +
      Object.entries(data)
        .map(([k, v]) => `${labels[k] ?? k}: ${v}`)
        .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Agnus Referrals <onboarding@resend.dev>",
        to: RECIPIENTS,
        subject,
        html,
        text,
      }),
    });

    const body = await res.text();
    if (!res.ok) {
      console.error("[send-referral] resend error", res.status, body);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: body }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    console.log("[send-referral] sent ok", body);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[send-referral] error", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
