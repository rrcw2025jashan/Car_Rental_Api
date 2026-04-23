import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend Express Request
export interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  // Check forr authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Extract token
  const token = authHeader.split(" ")[1];

  // Extra safety check 
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};