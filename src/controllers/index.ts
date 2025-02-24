import { Request, Response } from 'express';

class UserController {
    createUser(req: Request, res: Response) {
        // Logic to create a user
    }

    loginUser(req: Request, res: Response) {
        // Logic to log in a user
    }

    getUserProfile(req: Request, res: Response) {
        // Logic to get user profile
    }
}

class ProductController {
    createProduct(req: Request, res: Response) {
        // Logic to create a product
    }

    getProduct(req: Request, res: Response) {
        // Logic to get a single product
    }

    listProducts(req: Request, res: Response) {
        // Logic to list all products
    }
}

export { UserController, ProductController };