import { Request, Response, NextFunction } from "express";


export class PostMovie {
    public path = "/movie";
    public method = "GET";

    constructor() {

    }

    public async api(req: Request, res: Response, next: NextFunction) {
        req;
        res.send({
            message : "this is from get movie"
        });

        await next();
    }

}