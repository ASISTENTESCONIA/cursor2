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
  secret: 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, 
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  
  const user = usersData.find(u => u.email === email && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    req.session.user = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      isFounder: user.isFounder
    };
    
    res.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        isFounder: user.isFounder
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Could not log out' });
    }
    res.clearCookie('connect.sid');
    res.json({ success: true });
  });
});

app.get('/api/auth/me', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Serve the main application for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
} else {
  // In development, provide a simple response for the root route
  app.get('/', (req, res) => {
    res.json({ 
      message: 'Development server running. Please access the frontend at http://localhost:5173',
      api: 'http://localhost:5000/api',
      health: 'http://localhost:5000/api/health'
    });
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`👥 Users loaded: ${usersData.length}`);
  
  if (process.env.NODE_ENV !== 'production') {
    console.log(`🎯 Frontend should be running on: http://localhost:5173`);
    console.log(`🔧 API available at: http://localhost:${PORT}/api`);
  }
});