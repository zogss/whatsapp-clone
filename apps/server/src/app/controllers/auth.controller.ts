import { NextFunction, Request, Response } from 'express';
import getPrismaInstance from '../../utils/prisma.client';

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({ message: 'Email is required', status: false });
    }

    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.json({ message: 'User not found', status: false });
    } else {
      return res.json({ message: 'User found', status: true, data: user });
    }
  } catch (error) {
    next(error);
  }
};
