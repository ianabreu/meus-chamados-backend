import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken) return response.status(401).end();
  const [, token] = authToken.split(" ");

  const SECRET_JWT = process.env.SECRET_JWT as string;

  try {
    const { sub } = verify(token, SECRET_JWT) as Payload;
    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
