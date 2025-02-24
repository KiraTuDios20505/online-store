import { Router } from 'express';
import UserController from '../controllers/index';
import ProductController from '../controllers/index';

const router = Router();

const userController = new UserController();
const productController = new ProductController();

export function setRoutes(app) {
    // User routes
    app.post('/api/users', userController.createUser);
    app.post('/api/users/login', userController.loginUser);
    app.get('/api/users/profile', userController.getUserProfile);

    // Product routes
    app.post('/api/products', productController.createProduct);
    app.get('/api/products/:id', productController.getProduct);
    app.get('/api/products', productController.listProducts);
}