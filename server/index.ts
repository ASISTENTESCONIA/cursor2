import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Load users data
const usersDataPath = path.join(__dirname, '../users-data.json');
let usersData = [];
try {
  const data = fs.readFileSync(usersDataPath, 'utf8');
  usersData = JSON.parse(data);
} catch (error) {
  console.log('No users data found, starting with empty array');
}

// Session configuration
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from client directory in development
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '../client')));
} else {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = usersData.find(u => u.email === email && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    req.session.user = user;
    res.json({ success: true, user: { id: user.id, email: user.email, username: user.username, role: user.role, isFounder: user.isFounder } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.get('/api/auth/me', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

// Serve the main application
app.get('*', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  } else {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});