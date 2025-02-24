import { Request, Response } from 'express';

export const renderHome = (req: Request, res: Response) => {
    res.render('home', { title: 'Home' });
};

export const renderProductDetails = (req: Request, res: Response) => {
    const productId = req.params.id;
    // Fetch product details from the database using productId
    res.render('productDetails', { title: 'Product Details', productId });
};