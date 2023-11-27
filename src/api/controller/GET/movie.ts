import { Request, Response, NextFunction } from "express";


export class GetMovie {
    public path = "/movie";
    public method = "GET";

    constructor() {

    }

    public async api(req: Request, res: Response, next: NextFunction) {
        req;
        this.validate;
        res.send({
            message : "this is from get movie"
        });

        await next();
    }

    private validate() {
        console.log("validatio");
    }

}