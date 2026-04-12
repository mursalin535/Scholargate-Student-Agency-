// ─────────────────────────────────────────────
// HTML EMAIL WRAPPER
// ─────────────────────────────────────────────
const emailWrapper = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">
        <!-- HEADER -->
        <tr>
          <td style="padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#0f3460;padding:32px 40px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;color:#7dd3fc;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Legacy ScholarGate</p>
                        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">Education Consultancy</h1>
                      </td>
                      <td align="right" style="vertical-align:top;">
                        <div style="background:rgba(255,255,255,0.10);border-radius:12px;padding:10px 16px;display:inline-block;">
                          <p style="margin:0;color:#bae6fd;font-size:19px;">🎓</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background:linear-gradient(90deg,#1e40af,#0f3460);padding:10px 40px;">
                  <p style="margin:0;color:#93c5fd;font-size:12px;font-style:italic;letter-spacing:0.5px;">
                    "Adventure Awaits, Let Us Show You the Way."
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:36px 40px 28px;">
            ${content}
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 6px;color:#475569;font-size:12px;font-weight:600;">Legacy ScholarGate</p>
                  <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;">📍 Dhaka, Bangladesh 1206</p>
                  <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;">📞 09611-772246 &nbsp;|&nbsp; 📱 +880 1913-895849</p>
                  <p style="margin:0;color:#94a3b8;font-size:11px;">📧 info@legacyscholargate.bd</p>
                </td>
                <td align="right" style="vertical-align:bottom;">
                  <p style="margin:0;color:#cbd5e1;font-size:10px;">© ${new Date().getFullYear()} Legacy ScholarGate<br/>All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const row = (label, value) => `
  <tr>
    <td width="35%" style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-right:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">
      ${label}
    </td>
    <td style="padding:11px 14px;background:#ffffff;border:1px solid #e2e8f0;font-size:13px;color:#1e293b;vertical-align:top;line-height:1.5;">
      ${value || '<span style="color:#94a3b8;">—</span>'}
    </td>
  </tr>
`;

const sectionTitle = (icon, title) => `
  <tr>
    <td colspan="2" style="padding:20px 0 10px;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding-right:10px;font-size:16px;">${icon}</td>
          <td style="font-size:11px;font-weight:800;color:#0f3460;text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #0f3460;padding-bottom:6px;">
            ${title}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr><td colspan="2" style="height:4px;"></td></tr>
`;

const actionBox = (bg, border, textColor, icon, text) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
    <tr>
      <td style="background:${bg};border:1px solid ${border};border-radius:10px;padding:16px 20px;">
        <p style="margin:0;color:${textColor};font-size:13px;line-height:1.7;">
          ${icon} <strong>Suggested next step:</strong> ${text}
        </p>
      </td>
    </tr>
  </table>
`;

module.exports = {
  emailWrapper,
  row,
  sectionTitle,
  actionBox
};
