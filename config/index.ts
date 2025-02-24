import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/web-sales',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    environment: process.env.NODE_ENV || 'development',
};

export default config;