import express from 'express';
import cors from 'cors';

import authRoutes from './src/routes/auth.routes.js';
import profileRoutes from './src/routes/profile.routes.js';
import dashboardRoutes from './src/routes/dashboard.routes.js';
import universityRoutes from './src/routes/university.routes.js';
import shortlistRoutes from './src/routes/shortlist.routes.js';
import taskRoutes from './src/routes/task.routes.js';
import aiRoutes from './src/routes/ai.routes.js';


const app = express();

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like mobile apps or Postman
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // allow cookies/auth headers
}));

app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/universities', universityRoutes);
app.use('/', shortlistRoutes);
app.use('/tasks', taskRoutes);
app.use('/ai', aiRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error("Backend Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

export default app;
