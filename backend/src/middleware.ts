import { NextFunction } from "express";

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"] ;
    
}