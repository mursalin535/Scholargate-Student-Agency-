const statusView = (title, status, message, stats = null) => {
    const isError = status.toLowerCase().includes('error') || status.toLowerCase().includes('fail');
    const color = isError ? '#ef4444' : '#10b981';
    const bg = isError ? '#fef2f2' : '#f0fdf4';
    const border = isError ? '#fca5a5' : '#86efac';

    let trackingHtml = '';
    if (stats) {
        const uptimeDays = Math.floor(stats.uptime / (3600 * 24));
        const uptimeHours = Math.floor((stats.uptime % (3600 * 24)) / 3600);
        const uptimeMins = Math.floor((stats.uptime % 3600) / 60);

        trackingHtml = `
            <div class="tracking-panel">
                <h3>📊 Mail Tracking Panel</h3>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Total Mails Sent</span>
                        <span class="value">${stats.totalMailsSent}</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Server Uptime</span>
                        <span class="value">${uptimeDays}d ${uptimeHours}h ${uptimeMins}m</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Last Sent At</span>
                        <span class="value">${stats.lastMailSentAt ? new Date(stats.lastMailSentAt).toLocaleTimeString() : 'Never'}</span>
                    </div>
                </div>

                <h4>Recent Mail History</h4>
                <div class="history-list">
                    ${stats.history.length > 0 ? stats.history.map(item => `
                        <div class="history-item">
                            <span class="h-type">${item.type}</span>
                            <span class="h-rec">${item.recipient}</span>
                            <span class="h-time">${new Date(item.timestamp).toLocaleString()}</span>
                        </div>
                    `).join('') : '<p style="text-align:center;color:#94a3b8;font-size:0.8rem;">No mail activity recorded yet.</p>'}
                </div>
            </div>
        `;
    }

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Legacy ScholarGate API</title>
    <style>
        :root {
            --primary: #0f3460;
            --accent: #1e293b;
            --success: #10b981;
            --error: #ef4444;
            --bg: #f8fafc;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--bg);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            color: var(--accent);
            padding: 20px;
        }
        .container {
            background: white;
            padding: 2.5rem;
            border-radius: 1.25rem;
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.08);
            text-align: center;
            max-width: 550px;
            width: 100%;
            border: 1px solid #e2e8f0;
        }
        .status-badge {
            display: inline-block;
            margin-bottom: 1.5rem;
            padding: 0.5rem 1.25rem;
            background: ${bg};
            color: ${color};
            border: 1px solid ${border};
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        h1 {
            margin: 0 0 0.75rem;
            font-size: 1.75rem;
            color: var(--primary);
            font-weight: 800;
        }
        .message {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-size: 1rem;
        }
        .tracking-panel {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 2px dashed #e2e8f0;
            text-align: left;
        }
        .tracking-panel h3 {
            font-size: 1.1rem;
            margin: 0 0 1.5rem;
            color: var(--primary);
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .stat-box {
            background: #f1f5f9;
            padding: 1rem;
            border-radius: 0.75rem;
            text-align: center;
        }
        .stat-box .label {
            display: block;
            font-size: 0.7rem;
            color: #64748b;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .stat-box .value {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--primary);
        }
        .history-list {
            background: #f8fafc;
            border-radius: 0.75rem;
            border: 1px solid #e2e8f0;
            overflow: hidden;
        }
        .history-item {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
        }
        .history-item:last-child { border-bottom: none; }
        .h-type { font-weight: 700; color: var(--primary); width: 80px; }
        .h-rec { color: #64748b; flex-grow: 1; }
        .h-time { color: #94a3b8; font-variant-numeric: tabular-nums; }
        
        .footer {
            margin-top: 2.5rem;
            font-size: 0.8rem;
            color: #94a3b8;
        }
        @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; }
            .container { padding: 1.5rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status-badge">${status}</div>
        <h1>${title}</h1>
        <p class="message">${message}</p>
        
        ${trackingHtml}

        <div class="footer">
            &copy; ${new Date().getFullYear()} Legacy ScholarGate API &bull; Professional Build v1.0
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = statusView;
