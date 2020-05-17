import { Request, Response } from 'express';

export interface CustomGraphQLContext {
  req: Request;
  res: Response;
}
