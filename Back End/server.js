require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./src/routes/emailRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

const statusView = require('./src/views/statusView');

// Routes
// Mount the routes to the app
app.use('/', emailRoutes);

// 404 Handler - Catch all other routes
app.use((req, res) => {
  res.status(404).send(statusView(
    'Resource Not Found',
    '❌ Error 404',
    'The requested URL does not exist on this backend server.'
  ));
});

// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
