import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementation/UsersRepository";

interface IPayload {
    sub: string;
} 

export async function ensureAuthenticated (
    request: Request, 
    response: Response, 
    next: NextFunction
){

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try{
       const { sub: user_id } = verify(token, "225639b3444e5150227e1f6b5d15f2a2") as IPayload;
       
       const usersRepository = new UsersRepository();
       const user = usersRepository.findById(user_id);

       if(!user) {
        throw new AppError("User does not exists", 401);
       }

       next();
    }catch {
        throw new AppError("Invalid token", 401);
    }
}