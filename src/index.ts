import "dotenv/config";
import https from "https";
import fs from "fs";
import path from "path";
import connection from "./lib/db/config";
import { Apps } from "./apps";

(async()=>{
    const keyFile = process.env.KEY_FILE || "key.pem";
    const certFile = process.env.CERT_FILE || "cert.pem";
    const app = new Apps();
    try {
        await connection.sync();
        https.createServer(
            {
                key :  fs.readFileSync(path.resolve(__dirname,"../",keyFile)),
                cert : fs.readFileSync(path.resolve(__dirname,"../",certFile))
            },
            await app.getApp().then((app) => { return app; })
        ).listen(process.env.PORT);
        console.log("SERVER RUN IN PORT ", process.env.PORT);
    }catch(error) {
        console.log(error);
    }
})();