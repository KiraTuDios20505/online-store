import { hash, compare } from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};