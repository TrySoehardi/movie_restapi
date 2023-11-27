import {NextFunction, Request, Response} from "express";

export async function logging(req: Request, res: Response, next: NextFunction) {
	console.log(`${req.method}: ${req.path}`);
	console.log("HEADER:",req.headers);
	console.log("BODY", {...req.body});
	console.log("PARAMS:", req.query);
	next();
    console.log("STATUS_RESPONSE ",res.statusCode);
}