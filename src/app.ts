import express from 'express';
import { connectToDatabase } from '../config/database';
import setRoutes from './routes';
import { json, urlencoded } from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Connect to the database
connectToDatabase();

// Set up routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});