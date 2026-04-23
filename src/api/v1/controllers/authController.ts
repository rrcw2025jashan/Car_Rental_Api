import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // validation
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // mock userr
    const user = {
      id: "1",
      email,
    };

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }

    const token = jwt.sign(user, secret, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error during login",
    });
  }
};