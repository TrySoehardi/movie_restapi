import express from "express";
import controllers from "../controller";


export class Router {
    private controllers;
    private router;
    private prefix = "/api";
    constructor() {
        this.router = express.Router();
        this.controllers = controllers;
    }

    public getRouter() {
        for (const controller of this.controllers) {
            if (controller.method == "GET") {
                this.router.get(this.prefix+controller.path,(req, res, next)=>controller.api(req, res,next));
            }
                // } else if (controller.method == "POST") {
            //     this.router.post(this.prefix+controller.path,(req,res,next)=>controller.api(req,res,next));
            // } else if (controller.method == "PUT") {
            //     this.router.put(this.prefix+controller.path,(req,res,next)=>controller.api(req,res,next));
            // } else if (controller.method == "DELETE") {
            //     this.router.delete(this.prefix+controller.path,(req,res,next)=>controller.api(req,res,next));
            // }
        }

        return this.router;
    }
}