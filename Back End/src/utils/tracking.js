const fs = require('fs');
const path = require('path');

const STATS_FILE = path.join(__dirname, '../../stats.json');

let stats = {
    totalMailsSent: 0,
    lastMailSentAt: null,
    history: []
};

// Load stats from file if it exists
if (fs.existsSync(STATS_FILE)) {
    try {
        const data = fs.readFileSync(STATS_FILE, 'utf8');
        stats = JSON.parse(data);
    } catch (err) {
        console.error('Error loading stats:', err);
    }
}

const saveStats = () => {
    try {
        fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
    } catch (err) {
        console.error('Error saving stats:', err);
    }
};

const trackMail = (type, recipient) => {
    stats.totalMailsSent++;
    stats.lastMailSentAt = new Date().toISOString();
    
    // Keep last 10 entries in history
    stats.history.unshift({
        type,
        recipient,
        timestamp: stats.lastMailSentAt
    });
    
    if (stats.history.length > 10) {
        stats.history.pop();
    }
    
    saveStats();
};

const getStats = () => {
    return {
        ...stats,
        uptime: process.uptime()
    };
};

module.exports = {
    trackMail,
    getStats
};
