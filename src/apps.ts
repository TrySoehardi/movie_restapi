import "../src/lib/middleware/logger";
import express from "express";
import { Router } from "./api/router/router";
import { logging } from "./lib/middleware/logging";
import bodyParser from "body-parser";


export class Apps {
    public app;
    private router;
    constructor() {
        this.router = new Router();
        this.app = express();

        this.app.use(bodyParser.urlencoded({
            extended : false
        }));
        this.app.use(bodyParser.json());
        this.app.use(logging);
        this.app.use(this.router.getRouter());
        // this.app.get("api/movie",(req, res, next)=> {
        //     res.send("hah");
        // });
    }

    public async getApp() {
        return this.app;
    }
}