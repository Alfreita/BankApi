import { Request, Response } from "express";

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(request);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
